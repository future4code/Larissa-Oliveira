import { UserRepository } from "../business/user/UserRepository";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export default class UserData extends BaseDatabase implements UserRepository {
    protected TABLE_NAME = "labook_users"

    creatUser = async (user: User): Promise<void> => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert(user)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    findByEmail = async (email: string) => {
        try {
            const queryResult: User[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })

            return queryResult.length ? queryResult[0] : null
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    deleteUser = async (email: string) => {
        try {
            const queryResult: User[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })
                .del()

            return queryResult.length ? queryResult[0] : null
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

}