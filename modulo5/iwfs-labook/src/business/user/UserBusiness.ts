import { Follow } from "../../model/Follow";
import { User } from "../../model/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { UserRepository } from "./UserRepository";

export type SignupInputDTO = {
    name: string,
    email: string,
    password: string
}
export type LoginInputDTO = {
    email: string,
    password: string
}
export type followInputDTO = {
    idFollowed: string,
    token: string | undefined
}


export default class UserBusiness {

    private userData: UserRepository
    private idGenerator: IdGenerator
    private hashManager: HashManager
    private authenticator: Authenticator
    constructor(userDataImplementation: UserRepository) {
        this.userData = userDataImplementation
        this.idGenerator = new IdGenerator()
        this.hashManager = new HashManager()
        this.authenticator = new Authenticator()
    }


    signup = async (input: SignupInputDTO) => {

        const { name, email, password } = input
        if (!email || !name || !password) {
            throw new Error("Campos inválidos")
        }



        const registeredUser = await this.userData.findByEmail(email)
        // console.log(registeredUser[0],"aqui")
        if (registeredUser) {
            throw new Error("Email já cadastrado")
        }

        //criar um id
        const id = this.idGenerator.generateId()
        //criptografar a senha
        const hashedPassword = await this.hashManager.hash(password)
        //criar usuario no banco
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )

        const createUser = await this.userData.creatUser(user)
        //gerar e retornar token
        const token = this.authenticator.generateToken({ id })
        return token
    }
    login = async (input: LoginInputDTO) => {

        const { email, password } = input
        if (!email || !password) {
            throw new Error("Campos inválidos")
        }


        const user = await this.userData.findByEmail(email)

        if (!user) {
            throw new Error("Email não cadastrado")
        }

        const passwordVerification = await this.hashManager.compare(password, user.password)
        if (!passwordVerification) {
            throw new Error("Senha inválida")
        }
        const token = this.authenticator.generateToken({ id: user.id })

        return token
    }

    followUser = async (input: followInputDTO) => {


        const { idFollowed, token } = input
        console.log(idFollowed)
        if (!idFollowed) {
            throw new Error("Campos inválidos")
        }

        if (!token) {
            throw new Error("Token não informado")
        }
        const tokenData = this.authenticator.getTokenData(token)
        if (tokenData.id === idFollowed) {
            throw new Error("O usuário não pode seguir o próprio id")
        }

        const followed = await this.userData.findUserById(idFollowed)
        if (!followed) {
            throw new Error("Usuário não encontrado")
        }

        const id = this.idGenerator.generateId()

        const follow = new Follow(
            id,
            tokenData.id,
            followed.id
        )
        const followUser = await this.userData.followUser(follow)

        const usernameFollowed = followed.name as string
        return usernameFollowed
    }

    deleteFollowUser = async (input: followInputDTO) => {


        const { idFollowed, token } = input
        if (!idFollowed) {
            throw new Error("Invalid fields")
        }

        if (!token) {
            throw new Error("Token not informed")
        }
        const tokenData = this.authenticator.getTokenData(token)
        if (tokenData.id === idFollowed) {
            throw new Error("User cannot use own id")
        }

        const followed = await this.userData.findUserById(idFollowed)
        if (!followed) {
            throw new Error("User not found")
        }

        const verifyFollowedUser = await this.userData.findFollowedUser(tokenData.id, idFollowed)
        if (!verifyFollowedUser) {
            throw new Error("You do not follow this user")
        }


        const unfollowUser = await this.userData.deleteFollowedUser(tokenData.id, idFollowed)
        const userUnfollow = await this.userData.deleteFollowedUser(idFollowed, tokenData.id)

        const usernameFollowed = followed.name as string
        return usernameFollowed
    }
}