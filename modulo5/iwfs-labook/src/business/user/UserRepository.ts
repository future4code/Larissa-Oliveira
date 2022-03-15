import { Follow } from "../../model/Follow"
import {User} from "../../model/User"

export interface UserRepository{
    creatUser(user: User):Promise<void>
    findByEmail(email: string):Promise<User | null>
    findUserById(id: string):Promise<User | null>
    followUser(follow: Follow):Promise<void>
    findFollowedUser(followed:string, follower:string):Promise<Follow>
    deleteFollowedUser(followed:string, follower:string):Promise<void>
}