import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { UserTableName } from "../data/userTableName/userTableName";


export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const id = new IdGenerator();
        const { email, password } = req.body;

        const database = new UserTableName()

        const user = await database.getUserByEmail(email)

        await database.loginUser(email, password)

        const authenticator: Authenticator = new Authenticator()
        const token = authenticator.GenerateToken({ id: id.getId(), role: user.role  })

        res.status(200).send({ token })
    } catch (error: any) {
        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({message: error.message || error.sqlMessage  })
        } else {
            res.end()
        }
    }
}