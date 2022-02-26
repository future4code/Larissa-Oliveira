import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    public async createUser(user:User){
        try{
            await BaseDataBase.connection('User').insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })

        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection('User')
                .select('*')
                .where({ email })
            return User.toUserModel(user[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}