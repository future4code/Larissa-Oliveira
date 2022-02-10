import { Request, Response } from "express"
import { connection } from "../data/connection"
import { User } from "../types/User"

const getAllUsers = async (req: Request, res: Response) => {
    try {
        
        const result: User = await connection("labecommerce_users")
            .select("labecommerce_users.id", "labecommerce_users.name")

        res.status(200).send({ users: result || [] })
    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
export default getAllUsers;