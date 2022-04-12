import { UserRepository } from "../business/user/UserRepository";
import { Follow } from "../model/Follow";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export default class UserData extends BaseDatabase implements UserRepository {
    protected TABLE_USER = "labook_users"
    protected TABLE_FRIEND = "labook_friendship"

    creatUser = async (user: User): Promise<void> => {
        try {
            await BaseDatabase
                .connection(this.TABLE_USER)
                .insert(user)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    findByEmail = async (email: string) => {
        try {
            const queryResult: User[] = await BaseDatabase
                .connection(this.TABLE_USER)
                .select()
                .where({ email })

            return queryResult.length ? queryResult[0] : null
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    findUserById = async (id: string) => {
        try {
            const queryResult: User[] = await BaseDatabase
                .connection(this.TABLE_USER)
                .select()
                .where({ id })

            return queryResult.length ? queryResult[0] : null
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    followUser = async (follow: Follow): Promise<void> => {
        try {
            const queryResult: Follow[] = await BaseDatabase
                .connection(this.TABLE_FRIEND)
                .insert(
                    follow
                )
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    findFollowedUser = async (followed: string, follower: string): Promise<Follow> => {
        try {
            const [queryResult]: Follow[] = await BaseDatabase
                .connection(this.TABLE_FRIEND)
                .where({ id_user: followed })
                .andWhere({ id_follower: follower })

            return queryResult
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    deleteFollowedUser = async (followed: string, follower: string): Promise<void> => {
        try {
            await BaseDatabase
                .connection(this.TABLE_FRIEND)
                .where({ id_user: followed })
                .andWhere({ id_follower: follower })
                .delete()
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }



}