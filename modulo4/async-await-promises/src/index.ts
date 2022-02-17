import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import axios, { AxiosResponse } from "axios"
import { baseURL } from "./baseURL"
import { resourceLimits } from "worker_threads";

const app = express();

app.use(express.json());
app.use(cors());

type User = {
  id: string;
  name: string;
  email: string;
}

// Exercício-1
// a) get(`${baseURL}/subscribers`)
// b) usando async e await
// c)
// async function main() {
// async function getSubscribers(): Promise<User[]> {
//   const response = await axios.get(`${baseURL}/subscribers`);
//   return response.data;
// };

// const subscribers = await getSubscribers()

// console.log(subscribers)
// }
// main()

// Exercício-2
// a) a função nomeada recebe como argumento o async já a async função async já vem declarada e não precisa de atribuição
// b)
// async function main() {
//   const getSubscribers = async(): Promise<User[]> => {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
//   };

//   const subscribers = await getSubscribers()

//   console.log(subscribers)
//   }
//   main()

// Exercício-3
// a) não
// b) pois não temos controle dos dados que irão entrar, e com o type fica mais fácil de identificar o erro de entrada.
// c)
// async function main() {
//   const getSubscribers = async(): Promise<User[]> => {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data.map((res:any)=>{
//       return {
//         id:res.id,
//         name:res.name,
//         email:res.email
//       };
//     });
//   };

//   const subscribers = await getSubscribers()

//   console.log(subscribers)
//   }
//   main()

// Exercício-4
// a) async pois ela precisa aguardar e retorno da api para executar a função
// b)
// async function main() {
//   async function createNews(
//     title: string,
//     content: string,
//     date: number
//   ): Promise<void> {
//     await axios.put(`${baseURL}/news`, {
//       title: title,
//       content: content, 
//       date: date
//     });
//   }
// }
// main()

// Exercício-5
// async function main() {
//   const sendNotification = async (
//     users: User[],
//     message: string
//   ): Promise<void> => {
//     try {
//       for (const user of users) {
//         await axios.post(`${baseURL}/notifications`, {
//           subscriberId: user.id,
//           message
//         });
//       }

//       console.log("As notificações foram enviadas")
//     } catch {
//       console.log("Um erro inesperado aconteceu")
//     }
//   }
// }
// main()


// Exercício-6
// a) Retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises
// b) evita a lentidão pois a promessa é resolvida como um todo
// c)
async function main() {
  const sendNotification = async (
    users: User[],
    message: string
  ): Promise<void> => {
    try {
      const promises = users.map(user=>{
        return axios.post(`${baseURL}/notifications`, {
          subscriberId: user.id,
          message
      })
    })

      await Promise.all(promises)
    } catch {
      console.log("Um erro inesperado aconteceu")
    }
  }

}
main()



//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

