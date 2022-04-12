import { Card } from "../../model/card/Card";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { TokenGenerator } from "../../services/TokenGenerator";
import { CardRepository } from "./CardRepository";
import { CypherCardNumber } from "../../services/CypherCardNumber";
import { TransactionInputDTO } from "../../model/transaction/TransactionInputDTO";

export class CardBusiness {

    private cardData: CardRepository
    private hashManager: HashManager
    private idGenerator: IdGenerator
    private authenticator: TokenGenerator
    private cypherCardNumber: CypherCardNumber

    constructor(holderDataImplementation: CardRepository) {
        this.cardData = holderDataImplementation
        this.hashManager = new HashManager()
        this.idGenerator = new IdGenerator()
        this.authenticator = new TokenGenerator()
        this.cypherCardNumber = new CypherCardNumber()
    }
    createCard = async (input: TransactionInputDTO) => {

        const {
            token,
            cardholderName,
            cardNumber,
            cvv
        } = input

        if (
            !token ||
            !cardholderName ||
            !cardNumber ||
            !cvv
        ) {
            throw new Error("Algum campo não foi preenchido")
        }

        const tokenData = this.authenticator.getTokenData(token)
        if (!tokenData) {
            throw new Error("Token inválido")
        }

        const id = this.idGenerator.generateId()
        const cypherCard = await this.cypherCardNumber.cypherNumber(cardNumber)
        const hashCard = await this.hashManager.hash(cardNumber)
        const hashCvv = await this.hashManager.hash(cvv)

        const transaction = new Card(
            id,
            cardholderName,
            hashCard,
            cypherCard,
            hashCvv,
            tokenData.id
        )
        await this.cardData.createCard(transaction)

        return transaction
    }

}