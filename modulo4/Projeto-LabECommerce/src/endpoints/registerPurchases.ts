import { Request, Response } from "express";
import { insertPurchase } from "../services/insertPurchase"
import { selectProductPrice } from "../services/selectProductPrice"



const registerPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { userId, productId } = req.body
        const quantity = req.body.quantity as number
        let totalPrice: number = 0

        if (!userId || !productId || !quantity) {
            errorCode = 422
            throw new Error("Parâmetro pendente.")
        }

        const product = await selectProductPrice(productId)

        if (product) {
            totalPrice = product.price * quantity
        } else {
            errorCode = 422
            throw new Error("Preço não localizado")
        }

        await insertPurchase(userId, productId, quantity, product.price)

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