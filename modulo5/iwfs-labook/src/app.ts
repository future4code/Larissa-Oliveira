import express, { application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
export const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () =>{
    console.log("Servidor rodando na porta 3003")
})