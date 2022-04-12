import { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { Authenticator } from '../services/Authenticator'
import { CheckInfo } from '../services/CheckInfo'
import { HashManager } from '../services/HashManager'

export async function login(req: Request, res: Response) {
    let errorCode = 400
    try {
        const { email, password } = req.body

        if (!email || !password) {
            errorCode = 422
            throw new Error("Some pending parameter")
        }

        const checkInfo = new CheckInfo();
        const checkPassword = checkInfo.checkPassword(password)
        if (!checkPassword) {
            errorCode = 422
            throw new Error("Invalid password")
        }
        const checkEmail = checkInfo.checkEmail(email)
        if (!checkEmail) {
            errorCode = 422
            throw new Error("Invalid email")
        }

        const userDataBase = new UserDataBase()
        const checkUser = await userDataBase.findUserByEmail(email)
        if (!checkUser) {
            errorCode = 422
            throw new Error("Email invalido")
        }

        const comparePassword = new HashManager().compare(password, checkUser.getPassword())
        if (!comparePassword) {
            errorCode = 401
            throw new Error("Invalid password")
        }

        const token: string = new Authenticator().GenerateToken(
            {
                id: checkUser.getId(),
                role: checkUser.getRole()
            })

        res.status(201).send({ access_token: token });
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(errorCode).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
}