import { connection } from "../data/connection"
import { Products } from "../types/Products"


export const selectProducts = async (search?: string, order?: string): Promise<Products[]> => {
    const result: Products[] = await connection("labecommerce_products")
        .select()
        .where("labecommerce_products.name", "like", `%${search}%`)
        .orWhere("labecommerce_products.price", "like", `%${search}%`)
        .orWhere("labecommerce_products.id", "like", `%${search}%`)
        .orWhere("labecommerce_products.image_url", "like", `%${search}%`)
        .orderBy("labecommerce_products.id", order)

    return result
};