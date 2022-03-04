import { connection } from "../data/connection"
import { User } from "../types/User"


export const selectUsers = async (): Promise<User[]> => {
    const result: User[] = await connection("labecommerce_users")
        .select("labecommerce_users.id", "labecommerce_users.name")

    return result
}