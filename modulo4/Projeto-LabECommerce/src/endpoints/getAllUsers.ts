import { Request, Response } from "express"
import { selectUsers } from "../services/selectUsers"

const getAllUsers = async (req: Request, res: Response) => {
    try {
        await selectUsers()

        res.status(200).send({ Users: selectUsers })

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
export default getAllUsers;