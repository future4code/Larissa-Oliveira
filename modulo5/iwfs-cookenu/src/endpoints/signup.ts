import { Request, Response } from 'express';
import { UserDataBase } from '../data/UserDataBase';
import { User } from '../entities/User';
import { Authenticator } from '../services/Authenticator';
import { CheckInfo } from '../services/CheckInfo';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export async function signup(req: Request, res: Response) {
    let errorCode = 400
    try {

        const { name, email, password, role } = req.body

        const idGenerator = new IdGenerator();
        const id = idGenerator.getId()

        if (!name || !email || !password || !role) {
            errorCode = 422
            throw new Error("Some pending parameter")

        }

        const checkInfo = new CheckInfo();

        const checkPassword = checkInfo.checkPassword(password)
        if (!checkPassword) {
            errorCode = 422
            throw new Error("invalid password")
        }

        const checkEmail = checkInfo.checkEmail(email)
        if (!checkEmail) {
            errorCode = 422
            throw new Error("Invalid email")
        }

        const userDataBase = new UserDataBase();

        const checkUser = await userDataBase.findUserByEmail(email);
        if (checkUser) {
            errorCode = 422
            throw new Error("Invalid email")
        }

        if (role.toLowerCase() !== 'normal' && role.toLowerCase() !== 'admin') {
            errorCode = 422
            throw new Error("The role must be 'ADMIN' or 'NORMAL'")
        }

        const hashManager = new HashManager();
        const hashPassword = hashManager.hash(password)

        const newUser: User = new User(id, name, email, hashPassword, role)

        await userDataBase.createUser(newUser);

        const token: string = new Authenticator().GenerateToken({ id, role });

        res.status(201).send({ access_token: token });
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(errorCode).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
} 