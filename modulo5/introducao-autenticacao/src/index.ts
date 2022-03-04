import app from "./app"
// import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
// import { IdGenerator } from "./services/IdGenerator"
import {getUserByEmail} from "./endpoints/getUserByEmail"

app.post('/user/signup', createUser)
app.get('/user', getUserByEmail)
app.post('/user/login',login)