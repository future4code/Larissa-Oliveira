import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export default async function getName(
    req: Request,
    res: Response
): Promise<any> {
    try {
        const name = req.query.name
        const type = req.query.type as string
        let sort = req.query.sort as string
        let order = req.query.order as string

        if (sort !== 'name' && sort !== 'type') {
            sort = 'email';
        }
        if (order.toLocaleUpperCase() !== 'ASC' && order.toLocaleUpperCase() !== 'DESC') {
            order = 'ASC';
        }

        const result = await connection('aula48_exercicio')
        .where('name', 'like', `%${name}%`)
        .where('type', 'like', `%${type}%`)
        .orderBy(sort, order)

        const users = result.map(toUsers)
        
        if (!users.length) {
            res.statusCode = 400
            throw new Error("No user data found");
        }

        res.status(200).send(users)
    } catch (error) {
        res.status(500).send("Internal server erro2r")
    }
}
const toUsers = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }
}
