import {PayableBusiness} from "../../business/PlayableBusiness/PayableBusiness";
import {PayableDataBase} from "../../data/PlayableDataBase";
import { PayableInputDTO } from "../../model/playable/PayableInputDTO";
import { Request, Response } from "express";

export default class PayableController {
    private payableBusiness: PayableBusiness
    constructor() {
        this.payableBusiness = new PayableBusiness(new PayableDataBase)
    }

    createPayable = async (req: Request, res: Response) => {

        const input: PayableInputDTO = {
            token: req.headers.authorization,
            paymentMethod: req.body.paymentMethod,
            value: req.body.value,
            description: req.body.description,
            cardNumber: req.body.cardNumber,
            cvv: req.body.cvv,
        }

        try {
            const token = await this.payableBusiness.createPayable(input)

            res.status(200).send({
                message: "Compra realizada com sucesso!",
                token
            })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }

    getAllPayableByUser = async (req: Request, res: Response) =>{
        try {
            const input: string | any = {
                token: req.headers.authorization,
                id: req.body.id
            }
            const token = await this.payableBusiness.getAllPayableByUser(input)

            const result = [
                token?.getDescription,
                token?.getValue,
                token?.getStatus,
                token?.setPaymentDate,
            ]

            
            res.status(200).send({
                result
            })
            
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }


}