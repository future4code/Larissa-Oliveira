import { Request, Response } from 'express';
import { UserDataBase } from '../data/UserDataBase'
import { Authenticator } from '../services/Authenticator';


export async function profile(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization as string

        if (!token) {
            errorCode = 422
            throw new Error("Missing token")
        }
        const authenticator = new Authenticator().GetTokenData(token)
        
        if (authenticator.role !== "NORMAL") {
            errorCode = 422
            throw new Error("Unauthorized")
        }

        const user = new UserDataBase().findUserById(authenticator.id)
        
        res.status(200).send({
            id: (await(user)).getId(),
            name: (await (user)).getName(),
            email: (await (user)).getEmail()
        });

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(errorCode).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
}