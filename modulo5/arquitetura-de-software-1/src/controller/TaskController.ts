import { Request, Response } from "express"
import { TaskBusiness } from "../business/TaskBusiness"

const taskBusiness = new TaskBusiness()

export class TaskController {

  createTask = async (
    req: Request,
    res: Response
  ) => {
    try {

      const { title, description, deadline, authorId } = req.body

      taskBusiness.createTask(title, description, deadline, authorId)

      res.status(201).end()

    } catch (error: any) {

      res.statusMessage = error.message
      res.status(500).end()
    }
  }

  getTaskById = async (
    req: Request,
    res: Response
 ) => {
    try {
 
       const { id } = req.params

       const taskWithUserInfo = await taskBusiness.getTaskById(id)
 
 
       res.status(200).send(taskWithUserInfo)
 
    } catch (error: any) {
       res.status(400).send(error.message)
    }
 }
}