import { Request, Response } from 'express';
import { FeedDataBase } from '../../data/FeedDataBase';
import { FollowerDataBase } from '../../data/FollowerDataBase';
import { RecipeDataBase } from '../../data/RecipeDataBase'
import { UserDataBase } from '../../data/UserDataBase';
import { Authenticator } from '../../services/Authenticator';
import { FormatDate } from '../../services/FormatDate';


export async function userFeed(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization as string


        if (!token) {
            errorCode = 422
            throw new Error("You must be logged")
        }
        const authenticator = new Authenticator().GetTokenData(token)

        if (!authenticator) {
            errorCode = 422
            throw new Error("Unauthorized")
        }


        const followerDataBase: FollowerDataBase = new FollowerDataBase()

        const follower = await followerDataBase.findAllFollowerByUser(authenticator.id);

        const id = follower.getFollow()
        console.log(follower)
        const feedDataBase: FeedDataBase = new FeedDataBase()
        const feed = await feedDataBase.getFeed(follower.getFollow())

        
        

        if (feed.length === 0) {
            errorCode = 404
            throw new Error("No recipes")
        }

        res.status(200).send({
            recipes: feed
        });

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(errorCode).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
}