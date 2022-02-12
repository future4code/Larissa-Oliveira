import { Request, Response } from "express";
import { Products } from "../types/Products"
import { insertProduct } from "../services/insertProduct"


const registerProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, price, imageUrl } = req.body

        if (!name || !price || !imageUrl) {
            errorCode = 422
            throw new Error("Parâmetro pendente.")
        }

        const product: Products = {
            id: Date.now().toString(),
            name: name,
            price: price,
            image_url: imageUrl
        }

        await insertProduct(product)


        res.status(200).send("O produto foi registrado com sucesso!")
    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
export default registerProduct;