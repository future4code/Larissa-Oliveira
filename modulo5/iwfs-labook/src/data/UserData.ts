import { UserRepository } from "../business/user/UserRepository";
import User from "../model/User";
import BaseDatabase from "./BaseDatabase";

export default class UserData extends BaseDatabase implements UserRepository{
    protected TABLE_NAME = "labook_users"

    insert = async (user: User) =>{
        try{
            await BaseDatabase
            .connection(this.TABLE_NAME)
            .insert(user)
        return user
        }catch(error){
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }

    findByEmail = async (email: string) =>{
        try{
            const queryResult:User[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select()
                .where({email})

            return queryResult.length ? queryResult[0] : null
        }catch(error){
            throw new Error("Erro ao buscar usuário no banco")
        }
    }
}