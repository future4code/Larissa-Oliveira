import {CardBusiness} from "../../business/CardBusiness/CardBusiness";
import {CardDataBase} from "../../data/CardDataBase";
import { CardInputDTO } from "../../model/card/CardInputDTO";
import { Request, Response } from "express";

export default class CardController {
    private cardBusiness: CardBusiness
    constructor() {
        this.cardBusiness = new CardBusiness(new CardDataBase)
    }

    createCard = async (req: Request, res: Response) => {

        const input: CardInputDTO = {
            token: req.headers.authorization,
            cardholderName: req.body.cardholderName,
            cardNumber: req.body.cardNumber,
            cvv: req.body.cvv,
        }

        try {
            const token = await this.cardBusiness.createCard(input)

            res.status(200).send({
                message: "Cartão criado com sucesso!",
                token
            })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }


}