// import { Recipe } from "../entities/Recipe";
// import { BaseDataBase } from "./BaseDataBase";

// export class FollowersDataBase extends BaseDataBase {
//     private static tableName = "Follow_User_Cookenu"

//     public async createRecipe(recipe: Recipe) {
//         try {
//             await BaseDataBase.connection(FollowersDataBase.tableName).insert({
//                 id: recipe.getId(),
//                 follow: recipe.getTitle(),
//                 user_id: recipe.getDescription()
//             })

//         } catch (error: any) {
//             throw new Error(error.sqlMessage || error.message)
//         }
//     }


//     public async findRecipeByUser(creatorId: string): Promise<Recipe> {
//         try {
//         const [recipe] = await BaseDataBase
//         .connection(FollowersDataBase.tableName)
//         .select("*")
//         .where({ creatorId })

//         return recipe && Recipe.toRecipeModel(recipe);
//         } catch (error: any) {
//             throw new Error(error.sqlMessage || error.message)
//         }
//     }
//     public async findRecipeById(id: string): Promise<Recipe> {
//         try {
//         const [recipe] = await BaseDataBase
//         .connection(FollowersDataBase.tableName)
//         .where({ id })

//         return recipe && Recipe.toRecipeModel(recipe);
//         } catch (error: any) {
//             throw new Error(error.sqlMessage || error.message)
//         }
//     }


// }