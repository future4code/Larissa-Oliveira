import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

const userBusiness = new UserBusiness()

export class UserController {

  signup = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { name, email, password, role } = req.body

      const token = await userBusiness.signup(name,  email, password, role)

      res
        .status(201)
        .send({
          message: "Usuário criado!",
          token
        })

    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  login = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { email, password } = req.body

      const token = await userBusiness.login(email, password)

      res.send({
        message: "Usuário logado!",
        token
      })

    } catch (error: any) {

      switch (error.message) {
        case "'email' e 'senha' são obrigatórios":
          res.statusCode = 422
          break
        case "Usuário não encontrado ou senha incorreta":
          res.statusCode = 401
          break
        default:
          res.statusCode = 500
          error.message = "Um erro inesperado ocorreu"
      }

      res.send(error.message)
    }
  }
  
  gelAllUsers = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const token = req.headers.authorization!;
      const users = await userBusiness.get(token);
      
      res.send({
        users: users
      })
      .status(200);

    } catch (error: any) {
      res.send({ message: error.message }).status(error.status);
    }
  }
  deleteUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const input = {
        id: req.params.id,
        token: req.headers.authorization!
    }

    await userBusiness.delete(input);
      
      res.send({
        message: "Usuário apagado com sucesso"
      })
      .status(200);

    } catch (error: any) {
      res.send({ message: error.message }).status(error.status);
    }
  }




}