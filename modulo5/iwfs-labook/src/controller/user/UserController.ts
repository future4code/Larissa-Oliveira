import { Request, Response } from 'express'
import PostBusiness from '../../business/post/PostBusiness'
import UserBusiness, { followInputDTO, LoginInputDTO, SignupInputDTO } from '../../business/user/UserBusiness'
// import FirestoreUserDatabase from '../../data/FirestoreUserDatabase'
import UserData from '../../data/UserData'

export default class UserController {
    private userBusiness: UserBusiness
    constructor() {
        this.userBusiness = new UserBusiness(new UserData)
    }


    createPost = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }
        try {
            const token = await this.userBusiness.signup(input)

            res.status(200).send({ message: "Usuário cadastrado com sucesso", token })
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }
    login = async (req: Request, res: Response) => {
        const { email, password } = req.body

        const input: LoginInputDTO = {
            email,
            password
        }

        try {
            const token = await this.userBusiness.login(input)

            res.status(200).send({ Message: token })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Error no login")
        }

    }

    follow = async (req: Request, res: Response) => {

        const input: followInputDTO = {
            idFollowed: req.params.id,
            token: req.headers.authorization
        }
        try {
            const result = await this.userBusiness.followUser(input)

            console.log(result, "aqui")

            res.status(200).send({ Message: `Successfully followed ${result}`})
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Error following user")
        }

    }
    unfollow = async (req: Request, res: Response) => {

        const input: followInputDTO = {
            idFollowed: req.params.id,
            token: req.headers.authorization
        }
        try {
            const result = await this.userBusiness.deleteFollowUser(input)

            console.log(result, "aqui")

            res.status(200).send({ Message: `Successfully unfollow ${result}`})
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Error following user")
        }

    }

}