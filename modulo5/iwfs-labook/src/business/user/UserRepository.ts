import {User} from "../../model/User"

export interface UserRepository{
    creatUser(user: User):Promise<void>
    findByEmail(email: string):Promise<User | null>
}