import express from "express";
import UserBusiness from "../business/user/UserBusiness";
import UserController from "../controller/user/UserController";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import UserData from "../data/UserData";


const userController = new UserController()

export const userRouter = express.Router()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.put("/follow/:id", userController.follow)
userRouter.delete("/unfollow/:id", userController.unfollow)