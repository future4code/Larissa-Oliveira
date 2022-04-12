import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

   insertUser = async (
      user: user
   ) => {
      await UserDatabase.connection.insert({
         id: user.id,
         name: user.name,
         email: user.email,
         password: user.password,
         role: user.role
      }).into('User_Arq')
   }

   selectUserByEmail = async (
      email: string
   ): Promise<user> => {
      try {
         const result = await UserDatabase.connection("User_Arq")
            .select("*")
            .where({ email })

         return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            role: result[0].role
         }

      } catch (error: any) {
         throw new Error(error.slqMessage || error.message)
      }
   }

   get = async (
   ): Promise<user[]> => {
      try {

         const users: any = [];

         const result = await UserDatabase.connection()
            .select("*")
            .from("User_Arq");

         for (let user of result) {
            users.push(user);
         }

         return users;

      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }

   delete = async (
      id: string
   ): Promise<void> => {
      try {
         await UserDatabase.connection()
         .where({id})
         .from("User_Arq")
         .del()

      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }

}