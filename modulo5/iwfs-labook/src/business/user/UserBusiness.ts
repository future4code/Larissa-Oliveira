import { User } from "../../model/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { UserRepository } from "./UserRepository";

export type SignupInputDTO = {
    name: string,
    email: string,
    password: string
}
export type LoginInputDTO = {
    email: string,
    password: string
}


export default class UserBusiness {
    private userData: UserRepository
    private idGenerator: IdGenerator
    private hashManager: HashManager
    private authenticator: Authenticator
    constructor(userDataImplementation: UserRepository) {
        this.userData = userDataImplementation
        this.idGenerator = new IdGenerator()
        this.hashManager = new HashManager()
        this.authenticator = new Authenticator()
    }


    signup = async (input: SignupInputDTO) => {

        const { name, email, password } = input
        if (!email || !name || !password) {
            throw new Error("Campos inválidos")
        }



        const registeredUser = await this.userData.findByEmail(email)
        // console.log(registeredUser[0],"aqui")
        if (registeredUser) {
            throw new Error("Email já cadastrado")
        }

        //criar um id
        const id = this.idGenerator.generateId()
        //criptografar a senha
        const hashedPassword = await this.hashManager.hash(password)
        //criar usuario no banco
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )

        const createUser = await this.userData.creatUser(user)
        //gerar e retornar token
        const token = this.authenticator.generateToken({ id })
        return token
    }
    login = async (input: LoginInputDTO) => {

        const { email, password } = input
        if (!email || !password) {
            throw new Error("Campos inválidos")
        }


        const user = await this.userData.findByEmail(email)

        if (!user) {
            throw new Error("Email não cadastrado")
        }

        const passwordVerification = await this.hashManager.compare(password, user.password)
        if (!passwordVerification) {
            throw new Error("Senha inválida")
        }
        const token = this.authenticator.generateToken({ id: user.id })

        return token
    }
}