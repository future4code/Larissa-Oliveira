import { Request, Response } from "express";
import { UserTableName } from "../data/userTableName/userTableName";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../entities/user";
import { Authenticator } from "../services/Authenticator"



export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const id: string = IdGenerator();
      const user: User = new User(id, req.body.email, req.body.password)

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email")
      }

      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
      }

      const database = new UserTableName()

      await database.createUser(user)

      const authenticator: Authenticator = new Authenticator()
      const token = authenticator.GenerateToken({
         id,
      })


      res.status(201).send({ Token: token })

   } catch (error: any) {

      res.send({ message: error.message || error.sqlMessage })

   }
}