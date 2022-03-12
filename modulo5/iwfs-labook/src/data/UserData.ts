import { UserRepository } from "../business/user/UserRepository";
import User from "../model/User";
import BaseDatabase from "./BaseDatabase";

export default class UserData extends BaseDatabase implements UserRepository {
    protected TABLE_NAME = "labook_users"

    insert = async (user: User):Promise<User> => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert(user)
            return user
        } catch (error) {
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }

    findBy = async (email: string):Promise<User[]> => {
        try {
            const users: User[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })

            return users
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}