import { connection } from "../data/connection"
import { Products } from "../types/Products"


export const insertProduct = async (product: Products): Promise<void> => {
    await connection("labecommerce_products")
        .insert(product)
}