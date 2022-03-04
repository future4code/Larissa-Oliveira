import { Request, Response } from "express";
import { selectProducts } from "../services/selectProducts"

const getAllProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const search = req.query.search as string || "%"
        const order = req.query.order as string || "asc"

        const result = await selectProducts(search, order)

        if (!result) {
            errorCode = 404
            throw new Error("O produto não foi encontrado")
        }

        res.status(200).send({ Products: result })
    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
export default getAllProducts;