import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    private static tableName = "User_Cookenu"

    public async createUser(user: User) {
        try {
            await BaseDataBase.connection(UserDataBase.tableName).insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async findUserByEmail(email: string): Promise<User> {
        // try {
        const [user] = await BaseDataBase
        .connection(UserDataBase.tableName)
        .select("*")
        .where({ email })

        return user && User.toUserModel(user);
        // } catch (error: any) {
        //     throw new Error(error.sqlMessage || error.message)
        // }
    }

}