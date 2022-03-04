import { Request, Response } from "express";
import { UserTableName } from "../data/userTableName/userTableName";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../entities/user";
import { Users } from "../entities/users";
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"



export default async function createUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const id = new IdGenerator();
      const user: User = new User(id.getId(), req.body.email, req.body.password, req.body.role)

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email")
      }
      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
      }

      const cypherPassword: string = new HashManager().createHash(user.getPassword())

      const userData: User = new User(user.getId(), user.getEmail(), cypherPassword, user.getRole())

      
      const database = new UserTableName()

      await database.createUser(userData)


      const authenticator: Authenticator = new Authenticator()
      const token = authenticator.GenerateToken({
         id: user.getId(),
         role: user.getRole()
      })

      res.status(201).send({ token: token })

   } catch (error: any) {

      res.send({ message: error.message || error.sqlMessage })

   }
}