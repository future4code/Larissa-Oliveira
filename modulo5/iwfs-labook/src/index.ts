import { app } from './app'
import UserBusiness from './business/user/UserBusiness'
import UserController from './controller/user/UserController'
import UserData from './data/UserData'
import { Authenticator } from './services/Authenticator'
import { HashManager } from './services/HashManager'
import { IdGenerator } from './services/IdGenerator'

const userController = new UserController()

app.post("/user/signup", userController.signup)