import Post from "../../model/Post"


export interface PostRepository{
    insert(post: Post):Promise<Post>
    findById(id: string):Promise<Post | null>
}