import { Request, Response } from "express"
import { User } from "../types/User"
import { insertUser } from "../services/insertUser"
import certifyEmail from "../function/certifyEmail"

const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            errorCode = 422
            throw new Error("Parâmetro pendente.")
        }

        if (certifyEmail(email) === false) {
            errorCode = 422
            throw new Error("E-mail inválido")
        }

        const user: User = {
            id: Date.now().toString(),
            name: name,
            email: email,
            password: password
        }

        await insertUser(user)

        res.status(200).send(`O usuário foi criado com sucesso!`)

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}

export default createUser;