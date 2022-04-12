import { app } from './app'
import {userRouter} from './routes/UserRoutes'



app.use("/user", userRouter)