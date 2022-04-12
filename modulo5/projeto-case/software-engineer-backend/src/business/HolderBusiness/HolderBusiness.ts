import { Holder } from "../../model/holder/Holder";
import { FormatDate } from "../../services/FormateDate";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { ValidadeCpf } from "../../services/ValidadeCpf";
import { validateEmail } from "../../services/ValidateEmail";
import { Authenticator } from "../../model/authenticator/Authenticator";
import { HolderInputDTO } from "../../model/holder/HolderInputDTO";
import { TokenGenerator } from "../../services/TokenGenerator";
import { ValidadePassword } from "../../services/ValidadePassword";
import { HolderRepository } from "./HolderRepository";
import { HolderInputLoginDTO } from "../../model/holder/HolderInputLoginDTO";

export class HolderBusiness {

    private holderData: HolderRepository
    private hashManager: HashManager
    private idGenerator: IdGenerator
    private formatDate: FormatDate
    private authenticator: TokenGenerator
    constructor(holderDataImplementation: HolderRepository) {
        this.holderData = holderDataImplementation
        this.hashManager = new HashManager()
        this.idGenerator = new IdGenerator()
        this.formatDate = new FormatDate()
        this.authenticator = new TokenGenerator()
    }
    createHolder = async (input: HolderInputDTO) => {
        const { name, cpf, email, password } = input

        if (!name || !cpf || !email || !password) {
            throw new Error("Algum campo não foi preenchido")
        }
        if (ValidadeCpf(cpf) === false) {
            throw new Error("Cpf invalido.")
        }
        if (validateEmail(email) === false) {
            throw new Error("Email invalido.")
        }
        if (ValidadePassword(password) === false) {
            throw new Error("Senha invalido, precisa no mínimo 4 caracteres, pelo menos 1 letra e 1 número.")
        }

        const searchExistingHolder = await this.holderData.getHolderByCpf(cpf)
        const searchExistingEmail = await this.holderData.getHolderByEmail(email)

        if (searchExistingHolder) {
            throw new Error("Este usuário já esta cadastrado.")
        }
        if (searchExistingEmail) {
            throw new Error("Email invalido.")
        }

        const id = this.idGenerator.generateId()

        const cypherPassword = await this.hashManager.hash(password)

        const dateCreated = this.formatDate.formatPT(new Date())

        const holder = new Holder(
            id,
            name,
            cpf,
            email,
            cypherPassword,
            dateCreated
        )
        await this.holderData.createHolder(holder)

        const authenticator: Authenticator = {
            id: id,
            email: email
        }

        const token = this.authenticator.generateToken(authenticator)

        return token
    }

    login = async (input: HolderInputLoginDTO) => {
        const { email, password } = input

        if (!email || !password) {
            throw new Error("Verifique se 'email', 'password' estão preenchidos.")
        }

        if (validateEmail(email) === false) {
            throw new Error("Email invalido.")
        }

        if (ValidadePassword(password) === false) {
            throw new Error("Senha invalido, precisa no mínimo 4 caracteres, pelo menos 1 letra e 1 número.")
        }

        const holder = await this.holderData.getHolderByEmail(email)
        if (!holder) {
            throw new Error("O email que você inseriu não está conectado a uma conta")
        }


        const verifyPassword = await this.hashManager.compare(password, holder.getPassword())
        if (!verifyPassword) {
            throw new Error("Senha inválida")
        }

        const token = this.authenticator.generateToken({ id: holder.getId(), email: holder.getEmail() })

        return token

    }
}