import { Request, Response } from "express"
import { selectPurchasesByUser } from "../services/selectPurchasesByUser"

const getAllPurchaseUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId: string = req.params.id

        const purchases = await selectPurchasesByUser(userId)

        if (!purchases) {
            errorCode = 404
            throw new Error("O produto não foi encontrado")
        }

        res.status(200).send({ Purchases: purchases })
    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
export default getAllPurchaseUser;