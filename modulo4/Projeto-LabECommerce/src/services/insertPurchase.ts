import { connection } from "../data/connection"
import { Purchases } from "../types/Purchases"

export const insertPurchase = async (userId: string, productId: string, quantity: number, price: number) => {
    const purchase: Purchases =
    {
        id: Date.now().toString(),
        user_id: userId,
        product_id: productId,
        quantity: quantity,
        total_price: quantity * price
    }

    await connection("labecommerce_purchases")
        .insert(purchase)
};