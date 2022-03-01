import app from './app'
import { getUserById } from './endpoints/admin/getUserById'
import { login } from './endpoints/login'
import { profile } from './endpoints/profile'
import { createRecipe } from './endpoints/recipe/createRecipe'
import { getRecipeById } from './endpoints/recipe/getRecipe'
import { signup } from './endpoints/signup'
import { followUser } from './endpoints/user/followUser'
import { unfollowUser } from './endpoints/user/unfollowUser'
import { userFeed } from './endpoints/user/userFeed'


app.post("/signup", signup)
app.post("/login", login)
app.post("/recipe", createRecipe)
app.post("/user/follow", followUser)
app.post("/user/unfollow", unfollowUser)

app.get("/user/profile", profile)
app.get("/user/:id", getUserById)
app.get("/recipe/:id", getRecipeById)
app.get("/feed", userFeed)