import app from "./app"
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import userProfile from './endpoints/userProfile'
import {getUserByEmail} from "./endpoints/getUserByEmail"

app.post('/user/signup', createUser)
app.get('/user', getUserByEmail)
app.post('/user/login',login)
app.get('/user/profile', userProfile)