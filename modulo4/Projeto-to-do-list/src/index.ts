import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { createUser, getUserById, editUser, createTask, getTaskById, getAllUsers, deleteUser } from "./query"
import { transformDate, certifyEmail } from "./function"

const app = express();

app.use(express.json());
app.use(cors());


// GET getAllUsers => Pegar todos usuários
app.get("/user/all", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const result = await getAllUsers()

    res.status(200).send({ users: result || [] })

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// GET getUserById => Pegar usuário pelo id
app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id: string = req.params.id
    const result = await getUserById(id)

    if (result.length === 0) {
      errorCode = 422
      throw new Error("usuário não localizado")
    }

    res.status(200).send(result)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// GET getTaskById => Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id: string = req.params.id
    let result = await getTaskById(id)

    if (result.length === 0) {
      errorCode = 422
      throw new Error("Tarefa não localizada")
    }

    result[0].limit_date = transformDate(result[0].limit_date)

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// POST createUser => Criar usuário
app.post("/user", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, nickname, email } = req.body

    if (!name || !nickname || !email) {
      errorCode = 422
      throw new Error("Parâmetro pendente.")
    }
    if (certifyEmail(email) === false) {
      errorCode = 422
      throw new Error("E-mail inválido")
    }


    await createUser(name, nickname, email)

    res.status(200).send("O usuário foi criado com sucesso!")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// POST createTask => Criar tarefa
app.post("/task", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { title, description, limitDate, userId } = req.body

    const arrayDate = limitDate.split('/')
    const formatDate = `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`

    if (!title || !description || !limitDate || !userId) {
      res.statusCode = 422
      throw new Error("Parâmetro pendente.")
    }

    await createTask(title, description, formatDate, userId)

    res.status(200).send("A Tarefa foi criada com sucesso!")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }

})

// PUT editUser => Atualizar dados do usuário
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id: string = req.params.id
    let { name, nickname } = req.body

    if (!name || !nickname) {
      res.statusCode = 422
      throw new Error("Parâmetro pendente.")
    }

    await editUser(id, name, nickname)

    res.status(200).send("O usuário foi editado com sucesso!")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// DELETE getAllUsers => Pegar todos usuários
app.delete("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    if (!id) {
      res.statusCode = 422
      throw new Error("Parâmetro pendente.")
    }

    await deleteUser(id)

    res.status(200).send("O usuário foi deletado com sucesso!")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})




//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

