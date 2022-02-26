import { Request, Response } from 'express';
import { UserDataBase } from '../data/UserDataBase';
import { User } from '../entities/User';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password, role } = req.body
        if (!name || !email || !password || !role) {
            res.status(422).send("Algum parâmetro pendente")
        }

        const userDataBase = new UserDataBase();

        const user = await userDataBase.findUserByEmail(email);

        if (user) {
            res.status(409).send("O email informado já esta em uso")
        }
        const idGenerator = new IdGenerator(); // Criando instância da class IdGenerator
        const id = idGenerator.generate()


        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword, role)

        await userDataBase.createUser(newUser);




        res.status(200).send()
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
} 