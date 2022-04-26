import { Request, Response } from 'express';
import { UserDataBase } from '../../data/UserDataBase'
import { Authenticator } from '../../services/Authenticator';


export async function getUserById(req: Request, res: Response) {
    let errorCode = 400
    try {
        const userId:string = req.params.id as string
        const token:string = req.headers.authorization as string


        if (!token) {
            errorCode = 422
            throw new Error("Missing token")
        }

        const authenticator = new Authenticator().GetTokenData(token)
        
        if (authenticator.role !== "ADMIN") {
            errorCode = 422
            throw new Error("Unauthorized")
        }

        const user = new UserDataBase()
        let result: any
        
        if(userId){
            const getUser = await user.findUserById(userId)
            result = getUser
        }

        res.status(200).send({
            id: await result.getId(),
            name: await result.getName(),
            email: await result.getEmail()
        });

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(errorCode).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
}