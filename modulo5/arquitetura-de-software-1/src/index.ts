import { app } from "./controller/app"
import { TaskController } from "./controller/TaskController"
import { UserController } from "./controller/Usercontroller"

const userController = new UserController()
const taskController = new TaskController()

app.post('/user/signup', userController.signup)
app.post('/user/login', userController.login)
app.get('/all', userController.gelAllUsers)
app.delete('/:id',  userController.deleteUser)

app.put('/task', taskController.createTask)
app.get('/task/:id', taskController.getTaskById)

