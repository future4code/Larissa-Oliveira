import { TaskDatabase } from "../data/TaskDatabase"
import {  IdGenerator } from "../services/IdGenerator"

const taskDB = new TaskDatabase()
const idGenerator = new IdGenerator()

export class TaskBusiness {

  createTask = async (
    title: string,
    description: string,
    deadline: string,
    authorId: string,
  ) => {

    if (
      !title ||
      !description ||
      !deadline ||
      !authorId
    ) {
      throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
    }

    const id: string = idGenerator.generateId()

    await taskDB.insertTask({
      id,
      title,
      description,
      deadline,
      authorId,
    })
  }

  getTaskById = async (id:string) => {

    const result = await taskDB.selectTaskById(id)

    if (!result) {
       throw new Error("Tarefa não encontrada")
    }

    const taskWithUserInfo = {
       id: result.id,
       title: result.title,
       description: result.description,
       deadline: result.deadline,
       status: result.status,
       authorId: result.author_id,
       authorNickname: result.nickname
    }
    
    return taskWithUserInfo
  }

}