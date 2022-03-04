import { connection } from "../data/connection"

export const selectProductPrice = async (id: string): Promise<any> => {
    const result = await connection("labecommerce_products")
        .select("price")
        .where("id", id)

    return result[0]

}