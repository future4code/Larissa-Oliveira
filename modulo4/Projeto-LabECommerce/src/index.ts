import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser  from './endpoints/createUser'
import getAllUsers from './endpoints/getAllUsers'
import registerProduct from './endpoints/registerProduct'
import getAllProducts from './endpoints/getAllProducts'
import registerPurchases from './endpoints/registerPurchases'
import getAllPurchaseUser from './endpoints/getAllPurchaseUser'

dotenv.config()

export const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log("Server is running at port", process.env.PORT || 3003)
})

app.get("/users", getAllUsers) // Retorna uma lista com todos os usuários cadastrados no banco

app.get("/products", getAllProducts) // Retorna uma lista com todos os produtos cadastrados no banco

app.get("/purchases", getAllPurchaseUser) // Retornar uma lista com todas as compras do usuário especificado

app.post("/users", createUser) // Cadastra um novo usuário no banco através do body

app.post("/products", registerProduct) // Cadastra um novo produto no banco através do body

app.post("/purchases", registerPurchases) // Realiza a compra de um produto no banco através do body