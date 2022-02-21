// import { Request, Response } from "express";
// import {BaseDatabase}from "../data/BaseDatabase";
// import { Authenticator } from "../services/Authenticator";

// export default async function createUser(
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {

//       const { name, nickname } = req.body
//       const token = req.headers.authorization as string

//       if (!name && !nickname) {
//          res.statusCode = 422
//          res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
//          throw new Error()
//       }

//       const authenticator:Authenticator = new Authenticator()
//       const tokenData = authenticator.GetTokenData(token)
//       if(!tokenData){
//          res.statusCode = 401
//          res.statusMessage = "token invalido ou não passado"
//          throw new Error()
//       }

//       await connection('to_do_list_users')
//          .update({ name, nickname })
//          .where({ id: tokenData.id })

//       res.end()

//    } catch (error) {

//       if (res.statusCode === 200) {
//          res.status(500).end()
//       }

//       res.end()
//    }
// }