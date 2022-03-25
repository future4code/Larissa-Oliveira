import moment from "moment";
import { Payable } from "../../model/playable/Payable";
import { FormatDate } from "../../services/FormateDate";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { paymentStatus } from "../../model/enums/paymentStatus";
import { TokenGenerator } from "../../services/TokenGenerator";
import { PayableInputDTO } from "../../model/playable/PayableInputDTO";
import { PayableRepository } from "./PayableRepository";

export class PayableBusiness {

    private payableData: PayableRepository
    private hashManager: HashManager
    private idGenerator: IdGenerator
    private formatDate: FormatDate
    private tokenGenerator: TokenGenerator
    constructor(payableDataImplementation: PayableRepository) {
        this.payableData = payableDataImplementation
        this.hashManager = new HashManager()
        this.idGenerator = new IdGenerator()
        this.formatDate = new FormatDate()
        this.tokenGenerator = new TokenGenerator()
    }
    createPayable = async (input: PayableInputDTO) => {
        const { token, paymentMethod, value, description, cardNumber, cvv } = input

        if (!token) {
            throw new Error("Token inexistente ou inválido.")
        }
        const verifyToken = this.tokenGenerator.getTokenData(token)
        if (!verifyToken) {
            throw new Error("Token inexistente ou inválido.")
        }

        if (!token || !paymentMethod || !value || !description || !cardNumber || !cvv) {
            throw new Error("Algum campo não foi preenchido")
        }

        const checkCardHolder = await this.payableData.getHolderCard(verifyToken.id)

        const verifyCard = await this.hashManager.compare(cardNumber, checkCardHolder!.getCardNumber())
        if (!verifyCard) {
            throw new Error("Verifique o número do cartão")
        }

        const verifyCvv = await this.hashManager.compare(cvv, checkCardHolder!.getCvv())
        if (!verifyCvv) {
            throw new Error("Verifique o número do cvv")
        }


        let status: paymentStatus | any
        let updatedValue: number | any

        let paymentDate: any
        if (paymentMethod === 'DEBIT_CARD') {
            status = paymentStatus.paid
            updatedValue = (value - value * 0.3)
            paymentDate = moment().format('YYYY-MM-DD')
        } else if (paymentMethod === 'CREDIT_CARD') {
            status = paymentStatus.waiting_funds
            updatedValue = (value - value * 0.05);
            paymentDate = moment().add(30, 'days').format('YYYY-MM-DD HH')
        }

        const id = this.idGenerator.generateId()

        const dateCreated = this.formatDate.formatPT(new Date())

        const payable = new Payable(
            id,
            status,
            paymentDate,
            dateCreated,
            updatedValue,
            description,
            verifyToken.id
        )


        await this.payableData.createPayable(payable)

        return payable
    }

    getAllPayableByUser = async (token: string | undefined) => {
        if (!token) {
            throw new Error("Token inexistente ou inválido.")
        }

        const verifyToken = this.tokenGenerator.getTokenData(token)
        if (!verifyToken) {
            throw new Error("Token inexistente ou inválido.")
        }

        const payable = await this.payableData.getAllPayableByHolderId(verifyToken.id)
        
        return payable


    }
}