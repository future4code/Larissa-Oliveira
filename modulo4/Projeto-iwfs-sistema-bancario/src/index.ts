import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { users } from "./data"
import { User } from "./type"

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


app.get("/users", (req: Request, res: Response) => {
    try {
        let search = req.query.search as string
        let nameQuery = req.query.name as string
        let cpf = req.query.cpf as string

        if (search) {
            search = search.toLowerCase()

            const result = users.filter(
                user => user.name.toLowerCase().includes(search)
            )

            if (result.length === 0) {
                throw new Error('O "search" informado não foi localizado')
            }

            return res.status(200).send(result)
        }

        if (nameQuery && cpf) {

            if (!nameQuery) {
                throw new Error('O Campo "Name" não foi preenchido')
            }
            if (!cpf) {
                throw new Error('O Campo "cpf" não foi preenchido')
            }


            const findUser = users.filter(
                user => user.name.toLowerCase().includes(nameQuery) &&
                    user.cpf.toLowerCase().includes(cpf),
            )

            if (findUser.length === 0) {
                throw new Error('Usuario não localizado')
            }

            let searchBalance = []
            let searchResult = []
            let total = [];
            let spent = 0;
            let totalBalance = 0;


            for (let user of findUser) {
                for (let transaction of user.transactions) {
                    searchResult.push(transaction)

                    if (transaction.value) {
                        searchBalance.push(transaction.value)
                    }
                }
                total.push(user.balance)
            }

            for (let i = 0; i < searchBalance.length; i++) {
                spent += searchBalance[i];
            }
            for (let j = 0; j < total.length; j++) {
                totalBalance += total[j];
            }


            let result = Number(totalBalance - spent)

            if (searchResult.length === 0) {
                throw new Error('Você não tem saldo')
            }

            return res.status(200).send({
                result: {
                    balance: `O seu saldo atual é de ${result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`,
                    spending: `O total gasto foi de ${spent.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`,
                    quantity: searchResult
                }
            })
        }

        res.status(200).send(users)

    } catch (error: any) {
        switch (error.message) {
            case 'O "search" informado não foi localizado':
                res.statusCode = 404
                break;
            case 'O Campo "Name" não foi preenchido':
                res.statusCode = 422
                break;
            case 'O Campo "cpf" não foi preenchido':
                res.statusCode = 422
                break;
            case 'Usuario não localizado':
                res.statusCode = 404
                break;
            case 'Você não tem saldo':
                res.statusCode = 422
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})

app.post("/users", (req: Request, res: Response) => {
    try {

        const { name, cpf, birthDate } = req.body

        const [day, month, year] = birthDate.split('/')
        const actualDate = Date.now()
        const userBirthDate = new Date(year, month, day).getTime()
        const age: number = Math.floor((actualDate - userBirthDate) / (1000 * 3600 * 24) / (365.25))

        if (age < 18) {
            throw new Error('Você ainda não tem idade suficiente para criar esta conta, volte quando tiver mais de 18 anos')
        }

        if (!name) {
            throw new Error('O campo "name" não foi preenchido')
        }
        if (!cpf) {
            throw new Error('O campo "cpf" não foi preenchido')
        }
        if (!birthDate) {
            throw new Error('O campo "birthDate" não foi preenchido')
        }

        if (typeof (name || cpf || birthDate) !== typeof ('string')) {
            throw new Error('Os campos "name", "cpf" e "birthDate" só podem receber uma string!')
        }
        for (let i of users) {
            if (i.name === name && i.cpf === cpf && i.birthDate === birthDate) {
                throw new Error('este usuario já foi cadastrado')
            }
        }
        for (let i of users) {
            if (i.cpf === cpf) {
                throw new Error('este cpf já foi cadastrado')
            }
        }

        const newUser: User = {
            id: users.length + 1,
            name,
            cpf,
            birthDate,
            balance: 0,
            transactions: []
        }

        users.push(newUser)


        res.status(201).send(users)

    } catch (error: any) {
        switch (error.message) {
            case 'O campo "name" não foi preenchido':
                res.statusCode = 422
                break;
            case 'O campo "cpf" não foi preenchido':
                res.statusCode = 422
                break;
            case 'O campo "birthDate" não foi preenchido':
                res.statusCode = 422
                break;
            case 'O valor de "birthDate" precisa ser maior que 18!':
                res.statusCode = 422
                break;
            case 'Os campos "name", "cpf" e "birthDate" só podem receber uma string!':
                res.statusCode = 422
                break;
            case 'este usuario já foi cadastrado':
                res.statusCode = 422
                break;
            case 'este cpf já foi cadastrado':
                res.statusCode = 422
                break;
            case 'Você ainda não tem idade suficiente para criar esta conta, volte quando tiver mais de 18 anos':
                res.statusCode = 422
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})

app.post("/payAccount", (req: Request, res: Response) => {
    try {
        let nameQuery = req.query.name as string
        let cpf = req.query.cpf as string
        let { accountValue, description } = req.body


        if (!nameQuery) {
            throw new Error('O Campo "Name" não foi preenchido')
        }
        if (!cpf) {
            throw new Error('O Campo "cpf" não foi preenchido')
        }
        if (accountValue <= 0) {
            throw new Error('O valor precisa ser maior que 0')
        }
        if (!accountValue) {
            throw new Error('O valor precisa informar o valor a ser depositado')
        }

        const findUser: any = users.findIndex(
            user => user.name.toLowerCase().includes(nameQuery) &&
                user.cpf.toLowerCase().includes(cpf),
        )
        if (findUser.length === -1) {
            throw new Error('Usuario não localizado')
        }

        let updateBalance = users[findUser].balance
        for (let i = 0; i < users[findUser].transactions.length; i++) {
            updateBalance -= users[findUser].transactions[i].value

            if (updateBalance < accountValue) {
                throw new Error('Não foi possível pagar esta conta, saldo insuficiente')
            }

            updateBalance -= accountValue
        }






        users[findUser].transactions.push({
            idTransaction: Number(Math.floor(Date.now() * Math.random())),
            value: accountValue,
            date: String(Date.now()),
            description: description
        })

        res.status(201).send(`A conta foi paga, o seu saldo atual é de ${updateBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

    } catch (error: any) {
        switch (error.message) {
            case 'O Campo "Name" não foi preenchido':
                res.statusCode = 422
                break;
            case 'O Campo "cpf" não foi preenchido':
                res.statusCode = 422
                break;
            case 'O valor precisa ser maior que 0':
                res.statusCode = 422
                break;
            case 'Usuario não localizado':
                res.statusCode = 400
                break;
            case 'O valor precisa informar o valor a ser depositado':
                res.statusCode = 422
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})

app.put("/users", (req: Request, res: Response) => {
    try {
        const nameQuery = req.query.name as string
        const cpf = req.query.cpf as string
        let currency: number = req.body.balance

        if (!nameQuery) {
            throw new Error('O Campo "Name" não foi preenchido')
        }
        if (!cpf) {
            throw new Error('O Campo "cpf" não foi preenchido')
        }
        if (currency <= 0) {
            throw new Error('O valor precisa ser maior que 0')
        }
        if (!currency) {
            throw new Error('O Valor não foi informado')
        }

        const findUser: any = users.findIndex(
            user => user.name.toLowerCase().includes(nameQuery) &&
                user.cpf.toLowerCase().includes(cpf),
        )

        if (findUser.length === 0) {
            throw new Error('Usuario não localizado')
        }

        let updateBalance = users[findUser].balance

        for (let i = 0; i < users[findUser].transactions.length; i++) {
            updateBalance -= users[0].transactions[i].value
            updateBalance = users[findUser].balance + currency
            users[findUser].balance += currency
        }

        res.status(201).send(`Foi adicionado a sua conta o valor de ${currency.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. O saldo total é de ${updateBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

    } catch (error: any) {
        switch (error.message) {
            case 'O Campo "Name" não foi preenchido':
                res.statusCode = 422
                break;
            case 'O Campo "cpf" não foi preenchido':
                res.statusCode = 422
                break;
            case 'O valor precisa ser maior que 0':
                res.statusCode = 422
                break;
            case 'O Valor não foi informado':
                res.statusCode = 422
                break;
            case 'Usuario não localizado':
                res.statusCode = 400
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})