import { Request, Response } from "express";
import { connection } from "../data/connection"
import { Products } from "../types/Products"


const registerProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {name, price, imageUrl} = req.body

        if(!name || !price || !imageUrl){
            errorCode = 422
            throw new Error("Parâmetro pendente.")
        }

        const product: Products = await connection("labecommerce_products")
        .insert({
            id: Date.now().toString(),
            name: name,
            price: price,
            image_url: imageUrl
        });
        
        res.status(200).send("O produto foi registrado com sucesso!")
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}
export default registerProduct;