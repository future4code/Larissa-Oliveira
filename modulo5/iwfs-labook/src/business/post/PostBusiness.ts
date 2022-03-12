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
    date: Date,
    type: USER_TYPES,
    authorId: string,
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

        const { image, description, date, type, authorId }: postingInputDTO = input

        if (!image || !description || !date || !type || !authorId) {
            throw new Error("Campos inválidos")
        }
        if (!image || !description || !date || !type || !authorId) {
            throw new Error("Campos inválidos")
        }

        const id = this.idGenerator.generateId()

        const registeredPost = await this.postData.findById(id)
        if (registeredPost) {
            throw new Error("Post já criado")
        }

        const dateFormatted = this.formatDate.formatPT(date) as unknown as Date

        const verifyToken = this.authenticator.getTokenData(inputToken)

        if (!verifyToken) {
            throw new Error("Token inexistente ou inválido.")
        }

        const post = new Post(
            id,
            image,
            description,
            dateFormatted,
            type,
            authorId,
        )
        console.log(post)
        await this.postData.insert(post)
        return [{
            "Post criado: ": post
        }]
    }
}