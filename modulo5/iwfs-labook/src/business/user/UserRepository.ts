import User from "../../model/User"

export interface UserRepository{
    insert(user: User):Promise<User>
    findByEmail(email: string):Promise<User | null>
}