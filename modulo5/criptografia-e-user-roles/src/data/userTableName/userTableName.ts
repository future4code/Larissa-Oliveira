import { BaseDatabase } from "../BaseDatabase";
import { User } from "../../entities/user";
import { HashManager } from "../../services/HashManager"

export class UserTableName extends BaseDatabase{
    private static tableName = "User"

    private toUser = (input:User) => new User (
        input.getId(),
        input.getEmail(),
        input.getPassword(),
        input.getRole()
    )
        
    createUser = async (user:User) => BaseDatabase
    .connection(UserTableName.tableName)
    .insert ({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()
    })

    getUserById = async (id:string):Promise<any> =>{
        if(!id){
            throw new Error("please check input for request")
        }

        const [result] = await BaseDatabase
        .connection(UserTableName.tableName)
        .where({id})

        if (!result){
            throw new Error("User not found!")
        }

        return result
    }
    getUserByEmail = async (email:string):Promise<any> =>{
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

        const passwordIsCorrect: boolean = user && new HashManager().compareHash(password, user.password)

        if (!user || !passwordIsCorrect) {
            throw new Error("Credenciais inválidas")
        }

    }
}