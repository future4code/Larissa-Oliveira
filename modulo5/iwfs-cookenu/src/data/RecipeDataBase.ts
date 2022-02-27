import { Recipe } from "../entities/Recipe";
import { BaseDataBase } from "./BaseDataBase";

export class RecipeDataBase extends BaseDataBase {
    private static tableName = "Recipe_Cookenu"

    public async createRecipe(recipe: Recipe) {
        try {
            await BaseDataBase.connection(RecipeDataBase.tableName).insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                creationDate: recipe.getCreationDate(),
                creatorId: recipe.getCreatorId(),
                creatorName: recipe.getCreatorName()
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async findRecipeByUser(creatorId: string): Promise<Recipe> {
        try {
        const [recipe] = await BaseDataBase
        .connection(RecipeDataBase.tableName)
        .select("*")
        .where({ creatorId })

        return recipe && Recipe.toRecipeModel(recipe);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findRecipeById(id: string): Promise<Recipe> {
        try {
        const [recipe] = await BaseDataBase
        .connection(RecipeDataBase.tableName)
        .where({ id })

        return recipe && Recipe.toRecipeModel(recipe);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


}