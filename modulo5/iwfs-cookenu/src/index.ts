import app from './app'
import { getUserById } from './endpoints/admin/getUserById'
import { login } from './endpoints/login'
import { profile } from './endpoints/profile'
import { createRecipe } from './endpoints/recipe/createRecipe'
import { getRecipeById } from './endpoints/recipe/getRecipe'
import { signup } from './endpoints/signup'


app.post("/signup", signup)
app.post("/login", login)
app.post("/recipe", createRecipe)

app.get("/user/profile", profile)
app.get("/user/:id", getUserById)
app.get("/recipe/:id", getRecipeById)