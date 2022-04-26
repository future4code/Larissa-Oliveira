import { Request, Response } from 'express';
import { RecipeDataBase } from '../../data/RecipeDataBase'
import { UserDataBase } from '../../data/UserDataBase';
import { Authenticator } from '../../services/Authenticator';
import { FormatDate } from '../../services/FormatDate';


export async function getRecipeById(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization as string
        const recipeId:string = req.params.id as string

        if (!token) {
            errorCode = 422
            throw new Error("You must be logged")
        }
        const authenticator = new Authenticator().GetTokenData(token)
        if(!authenticator){
            errorCode = 422
            throw new Error("Unauthorized")
        }

        const recipeDataBase = new RecipeDataBase()

        const userId = await recipeDataBase.findRecipeById(recipeId)

        const date = userId.getCreationDate()

        const dateFormat = new FormatDate(date).formatUTC()
        
        res.status(200).send({
            id: userId.getId(), 
            title: userId.getTitle(),  
            description: userId.getDescription(),  
            creationDate: dateFormat,  
        });

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(errorCode).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
}