import { Request, Response } from 'express';
import { FollowerDataBase } from '../../data/FollowerDataBase';
import { UserDataBase } from '../../data/UserDataBase';
import { Followers } from '../../entities/Followers';
import { Authenticator } from '../../services/Authenticator';

import { IdGenerator } from '../../services/IdGenerator';

export async function followUser(req: Request, res: Response) {
    let errorCode = 400
    try {

        const token: string = req.headers.authorization as string
        const { userToFollowId } = req.body

        const idGenerator = new IdGenerator();
        const id = idGenerator.getId()

        if (!token) {
            errorCode = 401
            throw new Error("You must be logged in to create a recipe")
        }

        if (!userToFollowId) {
            errorCode = 422
            throw new Error("Enter the user id")
        }

        const follower = new Authenticator().GetTokenData(token)

        const userDataBase = new UserDataBase();
        const followerId = await userDataBase.findUserById(follower.id);
        const followId = await userDataBase.findUserById(userToFollowId)
        if(!followId){
            errorCode = 404
            throw new Error("User not found")
        }

        const followerDataBase = new FollowerDataBase();
        const verifyFollow = await followerDataBase.findFollowerByUser(followId.getId(),followerId.getId())
        
        if(verifyFollow){
            errorCode = 422
            followerDataBase.deleteFollow(followId.getId())
            throw new Error(`You unfollowed ${followId.getName()}`)
        }

        const newFollower: Followers = new Followers(id, followId.getId(), followerId.getId())
        await followerDataBase.createFollower(newFollower)


        res.status(201).send({
            message: ` Followed ${followId.getName()} successfully`
        });
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(errorCode).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
} 