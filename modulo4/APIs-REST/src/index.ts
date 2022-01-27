import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { users, Users } from "./data"

const app: Express = express()

app.use(cors())
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

// Exercício 1
// a) Método GET
// b) a entidade é o /user
app.get("/users", (req: Request, res: Response) => {
    try {
        const listUsers = users

        if (!listUsers) {
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(listUsers)

    } catch (error: any) {
        switch (error.message) {
            case "Usuário não encontrado":
                res.statusCode = 422
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})

// Exercício 2
// a) usando o for of para localizar o types dentro de users
// b) Usando o includes para localizar o nome do type digitado e o toUpperCase para converter a string em maiúsculo
app.get("/users/search/type", (req: Request, res: Response) => {
    try {
        const queriedName: any = req.query.type

        if (!queriedName) {
            throw new Error("Faltou a query 'type'")
        }

        let isTypeFound = false

        let searchResult: Users = []

        for (let types of users) {
            if (types.type.includes(queriedName.toUpperCase())) {
                searchResult.push({
                    id: types.id,
                    name: types.name,
                    email: types.email,
                    type: types.type,
                    age: types.age
                })
                isTypeFound = true
            }
        }

        if (!isTypeFound) {
            throw new Error("O type informado não foi localizado")
        }

        res.status(200).send({
            result: {
                quantity: searchResult.length,
                list: searchResult
            }
        })

    } catch (error: any) {
        switch (error.message) {
            case "Faltou a query 'type'":
                res.statusCode = 400
                break;
            case "O type informado não foi localizado":
                res.statusCode = 404
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})

// Exercício 3
// a) QueryParams
// b)
app.get("/users/search/name", (req: Request, res: Response) => {
    try {
        const queriedName: any = req.query.name

        if (!queriedName) {
            throw new Error("Faltou a query 'name'")
        }

        let isNameFound = false

        let searchResult: Users = []

        for (let names of users) {
            if (names.name.includes(queriedName[0].toUpperCase() + queriedName.substr(1))) {
                searchResult.push({
                    id: names.id,
                    name: names.name,
                    email: names.email,
                    type: names.type,
                    age: names.age
                })
                isNameFound = true
            }
        }

        if (!isNameFound) {
            throw new Error("O name informado não foi localizado")
        }

        res.status(200).send({
            result: {
                quantity: searchResult.length,
                list: searchResult
            }
        })

    } catch (error: any) {
        switch (error.message) {
            case "Faltou a query 'name'":
                res.statusCode = 400
                break;
            case "O name informado não foi localizado":
                res.statusCode = 404
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})

// Exercício 4
// a) Nada mudou
// b) Não pois o PUT é usado para atualizar recursos e neste caso, estamos criando.
app.put("/adcUser", (req: Request, res: Response) => {
    try {
        const { name, email, type, age } = req.body

        if (!name || !email || !type || !age) {
            throw new Error('Algum dos campos não foram preenchido!')
        }
        if (age <= 0) {
            throw new Error('O valor de "age" precisa ser maior que 0!')
        }
        if (typeof (name || email || type) !== typeof ('string')) {
            throw new Error('Os campos "name", "email" e "type" só podem receber uma string!')
        }
        if (type !== type.toUpperCase()) {
            throw new Error('O campo "type" só podem receber uma string MAIÚSCULA!')
        }
        if (name !== name[0].toUpperCase() + name.substr(1)) {
            throw new Error('O campo "name" só pode receber a primeira letra MAIÚSCULA!')
        }
        if (typeof (age) !== typeof (1)) {
            throw new Error('O campo "age" só pode receber um number!')
        }

        users.push({
            id: Number(users.length + 1),
            name,
            email,
            type,
            age
        })

        res.status(201).send(users)

    } catch (error: any) {
        switch (error.message) {
            case 'Algum dos campos não foram preenchido!':
                res.statusCode = 422
                break;
            case 'O valor de "age" precisa ser maior que 0!':
                res.statusCode = 422
                break;
            case 'Os campos "name", "email" e "type" só podem receber uma string!':
                res.statusCode = 422
                break;
            case 'O campo "type" só podem receber uma string MAIÚSCULA!':
                res.statusCode = 422
                break;
            case 'O campo "name" só pode receber a primeira letra MAIÚSCULA!':
                res.statusCode = 422
                break;
            case 'O campo "age" só pode receber um number!':
                res.statusCode = 422
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.status)
        res.send(error.message)
    }
})
