import { PostRepository } from "../business/post/PostRepository";
import { UserRepository } from "../business/user/UserRepository";
import Post from "../model/Post";
import { User } from "../model/User";
import {BaseDatabase} from "./BaseDatabase";

export default class PostData extends BaseDatabase implements PostRepository{
    protected TABLE_POST = "labook_post"
    protected TABLE_USER = "labook_users"

    insert = async (post: Post) =>{
        try{
            await BaseDatabase
            .connection(this.TABLE_POST)
            .insert(post)
        return post
        }catch(error){
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }

    findPostById = async (id: string) =>{
        try{
            const queryResult:Post[] = await BaseDatabase
                .connection(this.TABLE_POST)
                .select()
                .where({id})

            return queryResult.length ? queryResult[0] : null
        }catch(error){
            throw new Error("Erro ao buscar usuário no banco")
        }
    }
    findUserById = async (id: string) => {
        try {
            const queryResult: User[] = await BaseDatabase
                .connection(this.TABLE_USER)
                .select()
                .where({ id })

            return queryResult.length ? queryResult[0] : null
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}