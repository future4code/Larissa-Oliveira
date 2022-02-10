import {Request, Response} from "express";
import {connection} from "../data/connection"
import { Purchases } from "../types/Purchases";

const registerPurchases = async (req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const {userId, productId, quantity} = req.body

        if(!userId || !productId || !quantity){
            errorCode = 422
            throw new Error("Parâmetro pendente.")
        }

        const purchase: Purchases = await connection("labecommerce_purchases")
        .insert({
            id: Date.now().toString(),
            user_id: userId,
            product_id: productId,
            quantity: quantity
        })
        res.status(200).send("A compra foi realizada com sucesso!")
    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
export default registerPurchases;