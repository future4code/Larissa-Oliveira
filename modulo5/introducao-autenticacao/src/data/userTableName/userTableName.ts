import { BaseDatabase } from "../BaseDatabase";
import { User } from "../../entities/user";

export class UserTableName extends BaseDatabase{
    private static tableName = "User"

    private toUser = (input:User) => new User (
        input.getId(),
        input.getEmail(),
        input.getPassword()
    )

    createUser = (user:User) => BaseDatabase
    .connection(UserTableName.tableName)
    .insert ({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword()
    })

    getUserByEmail = async (email:string):Promise<any> =>{
        console.log(email)
        if(!email){
            throw new Error("please check input for request")
        }

        const [result] = await BaseDatabase
        .connection(UserTableName.tableName)
        .where({email})

        if (!result){
            throw new Error("User not found!")
        }

        return result
    }

    loginUser = async (email: string, password: string) => {
        
        if (!email || email.indexOf("@") === -1 || !password) {
            throw new Error("Parâmetro invalido")
        }

        const [user] = await BaseDatabase
        .connection(UserTableName.tableName)
        .where({ email })

        if (!user || user.password !== password) {
            throw new Error("Credenciais inválidas")
        }
    }
}