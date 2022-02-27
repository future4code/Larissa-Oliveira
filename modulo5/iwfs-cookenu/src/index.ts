import app from './app'
import { getUserById } from './endpoints/admin/getUserById'
import { login } from './endpoints/login'
import { profile } from './endpoints/profile'
import { signup } from './endpoints/signup'


app.post("/signup", signup)
app.post("/login", login)

app.get("/user/profile", profile)
app.get("/user/:id", getUserById)