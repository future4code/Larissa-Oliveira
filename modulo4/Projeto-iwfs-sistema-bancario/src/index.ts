import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { users, User, Transaction } from "./data"

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
                throw new Error("O search informado não foi localizado")
            }

            return res.status(200).send(result)
        }

        if (nameQuery && cpf) {

            if (!nameQuery) {
                throw new Error("Name não informado")
            }
            if (!cpf) {
                throw new Error("CPF não informado")
            }


            const resulta = users.filter(
                user => user.name.toLowerCase().includes(nameQuery) &&
                    user.cpf.toLowerCase().includes(cpf),
            )

            if (resulta.length === 0) {
                throw new Error("Dados não localizado")
            }

            let searchBalance = []
            let searchResult = []
            let total = [];
            let spent = 0;
            let totalBalance = 0;


            for (let user of resulta) {
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
            console.log(totalBalance)

            let result = Number(totalBalance - spent)


            console.log(result);



            if (searchResult.length === 0) {
                throw new Error("Você ainda não tem saldo")
            }

            return res.status(200).send({
                result: {
                    balance: `O seu saldo atual é de R$: ${result}`,
                    spending: `O total gasto foi de R$: ${spent}`,
                    quantity: searchResult
                }
            })
        }

        res.status(200).send(users)

    } catch (error: any) {
        switch (error.message) {
            case "O search informado não foi localizado":
                res.statusCode = 404
                break;
            case "Dados não localizado":
                res.statusCode = 404
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})

app.post("/adcUser", (req: Request, res: Response) => {
    try {
        const { name, cpf, birthDate } = req.body

        if (!name) {
            throw new Error('O campo "name" não foi preenchido')
        }
        if (!cpf) {
            throw new Error('O campo "cpf" não foi preenchido')
        }
        if (!birthDate) {
            throw new Error('O campo "birthDate" não foi preenchido')
        }
        if (birthDate <= 18) {
            throw new Error('O valor de "birthDate" precisa ser maior que 18!')
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
            case "Name não informado":
                res.statusCode = 422
                break;
            case "CPF não informado":
                res.statusCode = 422
                break;
            default:
                res.statusCode = 500
        }
        // res.send(error.status)
        res.send(error.message)
    }
})

app.post("/adcSaldo", (req: Request, res: Response) => {
    try {
        const balance: any = req.body.balance
        const userIdToAdd = req.headers.authorization

        if (!userIdToAdd) {
            throw new Error('O campo "authorization" não foi preenchido')
        }

        // for (let i = 0; i < users.length; i++) {
        //     if (users[i].id === userIdToAdd) {
        //         users[i].balance.push({
        //             balance
        //         })
        //     }
        // }

        // let newBalance = {
        //     balance
        // }



        for (let i = 0; i < users.length; i++) {
            if (users[i].id === userIdToAdd) {
                for (let f of users) {
                    f.balance.push(
                        balance)
                }
            }
        }




        // console.log(adcBalance)


        res.status(201).send(users)

    } catch (error: any) {
        switch (error.message) {
            case 'O campo "id" não foi preenchido':
                res.statusCode = 422
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})