import { Request, Response } from 'express';
import { RecipeDataBase } from '../../data/RecipeDataBase';
import { UserDataBase } from '../../data/UserDataBase';
import { Recipe } from '../../entities/Recipe';
import { Authenticator } from '../../services/Authenticator';
import { FormatDate } from '../../services/FormatDate';
import { IdGenerator } from '../../services/IdGenerator';

export async function createRecipe(req: Request, res: Response) {
    let errorCode = 400
    try {

        const token: string = req.headers.authorization as string
        const { title, description } = req.body

        const idGenerator = new IdGenerator();
        const id = idGenerator.getId()

        if (!token) {
            errorCode = 401
            throw new Error("You must be logged in to create a recipe")
        }

        if (!title || !description) {
            errorCode = 422
            throw new Error("Recipe needs a title and description")
        }

        const date = new FormatDate(new Date()).formatUTC()

        const creatorId = new Authenticator().GetTokenData(token)

        const userDataBase = new UserDataBase();
        const checkUser = await userDataBase.findUserById(creatorId.id);

        const recipeDataBase = new RecipeDataBase();
        const newRecipe: Recipe = new Recipe(id, title, description, date, creatorId.id, checkUser.getName())
        await recipeDataBase.createRecipe(newRecipe)


        res.status(201).send({ 
            id: newRecipe.getId() 
         });
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(errorCode).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
} 