import { Request, Response } from "express";
import { UserTableName } from "../data/userTableName/userTableName";
import {User} from "../entities/user"

export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const email: string = req.query.email as string

        const database = new UserTableName()

        const result = await database.getUserByEmail(email)

        const user = new User(result.id, result.email, result.password, result.role)

        res.status(201).send(user)

    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage })
    }
}