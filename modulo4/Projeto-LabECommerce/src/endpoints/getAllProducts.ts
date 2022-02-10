import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Products } from "../types/Products";

const getAllProducts = async (req: Request, res: Response) =>{
    try {

        const result: Products = await connection("labecommerce_products")
        .select("labecommerce_products.id","labecommerce_products.name", "labecommerce_products.price", "labecommerce_products.image_url")
        res.send({ Products: result || [] })
    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
export default getAllProducts;