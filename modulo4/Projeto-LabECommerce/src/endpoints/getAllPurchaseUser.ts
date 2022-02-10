import { Request, Response } from "express"
import {connection} from "../data/connection"

const getAllPurchaseUser = async (req: Request, res: Response)=>{
    try {
        const id:string = req.params.id
        
        const result = await connection("labecommerce_purchases")
        .select("*")
        .where('labecommerce_purchases.id', id)

        res.status(200).send({ users: result || [] })
    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
export default getAllPurchaseUser;