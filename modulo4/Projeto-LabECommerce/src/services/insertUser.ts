import { connection } from "../data/connection"
import { User } from "../types/User"


export const insertUser = async (user: User): Promise<void> => {
    await connection("labecommerce_users")
        .insert(user)
}