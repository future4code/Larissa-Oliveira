import knex, { Knex } from "knex"
import { Character } from "../types";
import dotenv from 'dotenv'

dotenv.config();

export class CharacterDataBase {

   private connection: Knex = knex({
      client: "mysql",
      connection: {
         host: process.env.DB_HOST,
         user: process.env.DB_USER,
         password: process.env.DB_PASS,
         database: process.env.DB_NAME,
         port: 3306,
         multipleStatements: true
      }
   })

   async createCharacter(character: Character) {
      try {
         await this.connection('Chara').insert(character)
      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
      //  console.log(character)
   }
}