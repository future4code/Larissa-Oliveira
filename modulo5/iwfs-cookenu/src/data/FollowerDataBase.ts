import { Followers } from "../entities/Followers";
import { BaseDataBase } from "./BaseDataBase";

export class FollowerDataBase extends BaseDataBase {
    private static tableName = "Follow_User_Cookenu"

    public async createFollower(follow: Followers) {
        try {
            await BaseDataBase.connection(FollowerDataBase.tableName).insert({
                id: follow.getId(),
                follow: follow.getFollow(),
                user_id: follow.getUser_id()
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async findFollowerByUser(follow: string, user_id: string): Promise<Followers> {
        try {
            const [follower] = await BaseDataBase
                .connection(FollowerDataBase.tableName)
                .select("*")
                .where({follow, user_id })

            return follower && Followers.toFollowerModel(follower);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findAllFollowerByUser(user_id: string): Promise<Followers> {
        try {
            const [follower] = await BaseDataBase
                .connection(FollowerDataBase.tableName)
                .select("*")
                .where({user_id })

            return follower && Followers.toFollowerModel(follower);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findFollowerById(follow: string): Promise<Followers> {
        try {
            const [follower] = await BaseDataBase
                .connection(FollowerDataBase.tableName)
                .where( {follow})
                
            return follower && Followers.toFollowerModel(follower);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async deleteFollow(follow: string): Promise<void> {
        try {
                await BaseDataBase
                .connection(FollowerDataBase.tableName)
                .where({ follow })
                .delete()

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


}