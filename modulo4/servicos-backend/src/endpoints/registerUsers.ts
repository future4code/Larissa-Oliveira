import { connection } from "../data/connection"
import { Request, Response } from "express"
import { getAddressInfo } from "../services/getAddressInfo"

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { complemento, numero, cep, email, senha } = req.body
        const id = Date.now().toString()
        const address = await getAddressInfo(cep)

        if (!address) {
            throw new Error("endereço não identificado");
        }

        await connection("users")
            .insert({ id: id, email: email, password: senha })

        await connection("userAddress")
            .insert({
                cep: cep, street: address.street, number: numero,
                complement: complemento, neighborhood: address.neighborhood, city: address.city,
                state: address.state, user_id: id
            })
        res.send('Usuario criado com sucesso!' )
    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}