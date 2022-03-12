import { PostRepository } from "../business/post/PostRepository";
import { UserRepository } from "../business/user/UserRepository";
import Post from "../model/Post";
import BaseDatabase from "./BaseDatabase";

export default class PostData extends BaseDatabase implements PostRepository{
    protected TABLE_NAME = "labook_users"

    insert = async (post: Post) =>{
        try{
            await BaseDatabase
            .connection(this.TABLE_NAME)
            .insert(post)
        return post
        }catch(error){
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }

    findById = async (id: string) =>{
        try{
            const queryResult:Post[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select()
                .where({id})

            return queryResult.length ? queryResult[0] : null
        }catch(error){
            throw new Error("Erro ao buscar usuário no banco")
        }
    }
}