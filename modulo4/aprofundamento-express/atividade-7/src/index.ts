import express from "express";
import cors from "cors"
import { AddressInfo } from "net";

const app = express();

app.use(cors())
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}[]

const afazeres: Afazeres = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    }
]

app.delete("/deletaTarefa", (req, res) => {
    const id = req.query.id

    afazeres.forEach((tarefa: any) => {
        if(tarefa.id === id){
            return afazeres.splice(tarefa,1)
        }
        return tarefa
    })
    res.status(200).send(afazeres)
})