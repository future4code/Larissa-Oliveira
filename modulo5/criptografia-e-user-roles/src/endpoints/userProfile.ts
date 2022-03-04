import { Request, Response } from "express";
import { UserTableName } from "../data/userTableName/userTableName";
import { User } from "../entities/user"
import {Authenticator} from "../services/Authenticator"

export default async function userProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const token = req.headers.authorization as string

        const database = new UserTableName()

        const tokenData  = new Authenticator().GetTokenData(token)

     

        if (tokenData?.role !== "NORMAL") {
            throw new Error("Only a normal user can access this functionality");
        }
        

        const user = await database.getUserById(tokenData?.id)

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: tokenData.role,
          });
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
}