import { Request, Response } from "express"
import { connection } from "../data/connection"
import { User } from "../types/User"
import certifyEmail from "../function/certifyEmail"

const createUser = async (req: Request, res: Response) => {
   let errorCode = 400
    try {
        const { name, email, password } = req.body

        if(!name || !email || !password){
            errorCode = 422
            throw new Error("Parâmetro pendente.")
        }

        if (certifyEmail(email) === false) {
            errorCode = 422
            throw new Error("E-mail inválido")
          }

        const users: User = await connection("labecommerce_users")
            .insert({
                id: Date.now().toString(),
                name: name,
                email: email,
                password: password
            })
            
        res.status(200).send(`O usuário foi criado com sucesso!`)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}

export default createUser;