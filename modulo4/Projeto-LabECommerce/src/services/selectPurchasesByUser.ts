import { connection } from "../data/connection"


export const selectPurchasesByUser = async (userId: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT "labecommerce_users.name", labecommerce_users.email, labecommerce_products.name, 
    labecommerce_purchases.quantity, labecommerce_purchases.total_price
    FROM labecommerce_purchases
    INNER JOIN labecommerce_users on labecommerce_users.id = user_id
    INNER JOIN labecommerce_products on labecommerce_products.id = product_id
    WHERE user_id = '${userId}'
`)
    return result[0]
}
