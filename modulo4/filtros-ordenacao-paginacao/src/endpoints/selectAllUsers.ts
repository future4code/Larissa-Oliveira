import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers(
    req: Request,
    res: Response
): Promise<any> {
    try {

        const result = await connection.raw(`
            SELECT id, name
            FROM aula48_exercicio;
        `)
        const recipes = result[0]

        res.status(200).send(recipes)
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

