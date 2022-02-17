import { app } from "./app";
import  {getAllRecipes}  from "./endpoints/getAllRecipes";
import  getName  from "./endpoints/getName";
import  selectAllUsers  from "./endpoints/selectAllUsers";

app.get("/recipes", getAllRecipes)
app.get("/user", selectAllUsers)
app.get("/user/name", getName)