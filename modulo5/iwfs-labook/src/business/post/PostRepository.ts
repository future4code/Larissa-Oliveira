import Post from "../../model/Post"
import { User } from "../../model/User"


export interface PostRepository{
    insert(post: Post):Promise<Post>
    findPostById(id: string):Promise<Post | null>
    findUserById(id: string):Promise<User | null>
}