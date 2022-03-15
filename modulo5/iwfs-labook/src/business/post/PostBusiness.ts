import Post from "../../model/Post";
import { Authenticator } from "../../services/Authenticator";
import { FormatDate } from "../../services/FormatDate";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { PostRepository } from "./PostRepository";

export enum USER_TYPES {
    NORMAL = "NORMAL",
    ADMIN = "EVENT"
}

export type postingInputDTO = {
    image: string,
    description: string,
    type: USER_TYPES,
}



export default class PostBusiness {
    private postData: PostRepository
    private idGenerator: IdGenerator
    private hashManager: HashManager
    private authenticator: Authenticator
    private formatDate: FormatDate
    constructor(postDataImplementation: PostRepository) {
        this.postData = postDataImplementation
        this.idGenerator = new IdGenerator()
        this.hashManager = new HashManager()
        this.authenticator = new Authenticator()
        this.formatDate = new FormatDate()
    }

    createPost = async (input: postingInputDTO, token: string) => {

        const inputToken = token

        const { image, description, type}: postingInputDTO = input

        if (!image || !description || !type) {
            throw new Error("Campos inválidos")
        }

        const id = this.idGenerator.generateId()

        const registeredPost = await this.postData.findPostById(id)
        if (registeredPost) {
            throw new Error("Post já criado")
        }

        const verifyToken = this.authenticator.getTokenData(inputToken)

        const userPost = await this.postData.findUserById(verifyToken.id)

        if (!verifyToken) {
            throw new Error("Token inexistente ou inválido.")
        }
        const autorName =  userPost?.name as string

        const post = new Post(
            id,
            verifyToken.id,
            autorName,
            image,
            description,
            type
        )
        console.log(post)
        await this.postData.insert(post)
        return [{
            "Post criado: ": post
        }]
    }
}