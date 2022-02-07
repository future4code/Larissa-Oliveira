import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { createUser, getUserById, editUser, createTask, getTaskById } from "./query"

const app = express();

app.use(express.json());
app.use(cors());


const transformDate = (date: Date): string => {

  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()

  return dd + '/' + mm + '/' + yyyy;
}

const certifyEmail = (email: string): boolean => {
  const pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
};


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
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
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
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

// POST createTask => Criar tarefa
app.post("/task", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { title, description, limitDate, creatorUserId } = req.body

    const arrayDate = limitDate.split('/')
    const formatDate = `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`

    if (!title || !description || !limitDate || !creatorUserId) {
      res.statusCode = 422
      throw new Error("Parâmetro pendente.")
    }

    await createTask(title, description, formatDate, creatorUserId)

    res.status(200).send("A Tarefa foi criada com sucesso!")

  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }

})

// GET getTaskById => Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id: string = req.params.id
    let result = await getTaskById(id)
    // console.log(result)

    if (result.length === 0) {
      errorCode = 422
      throw new Error("Tarefa não localizada")
    }

    result[0].limit_date = transformDate(result[0].limit_date)
    console.log(result)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
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

