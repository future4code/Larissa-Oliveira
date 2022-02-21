import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { UserTableName } from "../data/userTableName/userTableName";


export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const id: string = IdGenerator();
        const { email, password } = req.body;

        const database = new UserTableName()
        await database.loginUser(email, password)

        const authenticator: Authenticator = new Authenticator()
        const token = authenticator.GenerateToken({ id, })

        res.status(200).send({ token })
    } catch (error) {
        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.end()
        }
    }
}