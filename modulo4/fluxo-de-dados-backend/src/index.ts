import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { produtos, Produtos } from "./data"

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
app.get("/test", (req: Request, res: Response) => {
    const test: string = "ta funcionandoooo"
    res.status(200).send(test);
})

// Exercício 4
app.get("/produtos", (req: Request, res: Response) => {
    const listaProdutos = produtos
    const userIdToAdd = req.headers.authorization

    res.status(200).send(listaProdutos)
})
// Exercício 3 || Exercício 7
app.post("/produto", (req: Request, res: Response) => {
    try {
        const { nameProduct, price } = req.body

        if (!nameProduct || !price) {
            throw new Error('O campo "nameProduct" e/ou "price" não foi preenchido!')
        }
        if (price <= 0) {
            throw new Error('O valor de "price" precisa ser maior que 0!')
        }
        if (typeof (nameProduct) !== typeof ('string')) {
            throw new Error('O campo "nameProduct" só pode receber uma string!')
        }
        if (typeof (price) !== typeof (1)) {
            throw new Error('O campo "price" só pode receber um number!')
        }

        produtos.push({
            id: Date.now().toString(),
            nameProduct,
            price
        })

        res.status(201).send(produtos)

    } catch (error: any) {
        switch (error.message) {
            case 'O campo "nameProduct" e/ou "price" não foi preenchido!':
                res.statusCode = 422
                break;
            case 'O valor de "price" precisa ser maior que 0!':
                res.statusCode = 422
                break;
            case 'O campo "nameProduct" só pode receber uma string!':
                res.statusCode = 422
                break;
            case 'O campo "price" só pode receber um number!':
                res.statusCode = 422
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})
// Exercício 5 || Exercício 8
app.put("/alteraPreco/:id", (req: Request, res: Response) => {
    try {
        const idProduto = req.params.id


        if (!idProduto) {
            throw new Error('O "id" do produto não foi informado')
        }
        if (req.body.price <= 0) {
            throw new Error('O valor de "price" precisa ser maior que 0!')
        }
        if (!req.body.price) {
            throw new Error('O campo "price" não foi preenchido!')
        }
        if (typeof (req.body.price) !== typeof (1)) {
            throw new Error('O campo "price" só pode receber um number!')
        }

        let produtoEncontrado = false

        produtos.forEach((i) => {
            if (i.id === idProduto) {
                i.price = req.body.price
            }
            produtoEncontrado = true
        })
        res.status(200).send(produtos)

    } catch (error: any) {
        switch (error.message) {
            case 'O "id" do produto não foi informado':
                res.statusCode = 422
                break;
            case 'O valor de "price" precisa ser maior que 0!':
                res.statusCode = 422
                break;
            case 'O campo "price" não foi preenchido!':
                res.statusCode = 422
                break;
            case 'O campo "price" só pode receber um number!':
                res.statusCode = 422
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})
// Exercício 6 || Exercício 8
app.delete("/deletarProduto/:id", (req: Request, res: Response) => {
    try {
        const idProdutoDel = req.params.id

        let produtoEncontrado = false

        produtos.forEach((produto, index) => {
            if (produto.id === idProdutoDel) {
                produtos.splice(index, 1)
            }
            produtoEncontrado = true
        })

        if (!produtoEncontrado) {
            throw new Error('Produto não encontrado!')
        }
        res.status(200).send(produtos)

    } catch (error: any) {
        switch (error.message) {
            case 'Produto não encontrado!':
                res.statusCode = 400
                break;
            default:
                res.statusCode = 500
        }
        res.send(error.message)
    }
})