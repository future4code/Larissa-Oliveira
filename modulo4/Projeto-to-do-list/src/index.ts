import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { User } from "./type"

const app = express();

app.use(express.json());
app.use(cors());


// Criar usuário
const id = Date.now() // gera um id para o usuário
const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection("ToDoListUser")
    .insert({
      id,
      name: name,
      nickname: nickname,
      email: email
    });
};

// Pegar usuário pelo id
const getUserById = async (id: number): Promise<any> => {
  const userId = await connection("ToDoListUser")
    .select('*')
    .where('id', id)
  return userId
}

// Atualizar dados do usuário
const editUser = async (id: number, name: string, nickname: string): Promise<any> => {
  await connection("ToDoListUser")
    .update({
      name: name,
      nickname: nickname
    })
    .where('id', id)
}

// Criar tarefa
const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  userId: number
): Promise<any> => {
  await connection("ToDoListTask")
    .insert({
      title: title,
      description: description,
      limit_date: limitDate,
      user_id: userId
    });
};

// Pegar tarefa pelo id
const getTaskById = async (id: number): Promise<any> => {
  const taskId = await connection("ToDoListTask")
    .innerJoin('ToDoListUser',
      "ToDoListTask.user_id",
      "ToDoListUser.id")
    .select('ToDoListTask',
      "title",
      "description",
      "status",
      "limit_date",
      "user_id",
      "ToDoListUser.nickname"
    )
  return taskId
}


app.post("/user", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, nickname, email } = req.body
    if (!name || !nickname || !email) {
      errorCode = 422
      throw new Error("Um ou mais parâmetro pendente na requisição")
    }

    await createUser(name, nickname, email)

    res.status(200).send("O Usuário foi criado com sucesso!")

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

