import User from "../../model/User"

export interface UserRepository{
    insert(user: User):Promise<User>
    findBy(email: string):Promise<User[]>
}