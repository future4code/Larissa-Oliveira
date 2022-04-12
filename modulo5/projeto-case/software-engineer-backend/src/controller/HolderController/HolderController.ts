import {HolderBusiness} from "../../business/HolderBusiness/HolderBusiness";
import {HolderDataBase} from "../../data/HolderDataBase";
import { HolderInputDTO } from "../../model/holder/HolderInputDTO";
import { Request, Response } from "express";
import { HolderInputLoginDTO } from "../../model/holder/HolderInputLoginDTO";

export default class HolderController {
    private holderBusiness: HolderBusiness
    constructor() {
        this.holderBusiness = new HolderBusiness(new HolderDataBase)
    }

    createHolder = async (req: Request, res: Response) => {

        const input: HolderInputDTO = {
            name: req.body.name,
            cpf: req.body.cpf,
            email: req.body.email,
            password: req.body.password
        }
        
        try {
            const token = await this.holderBusiness.createHolder(input)
            res.status(200).send({
                message: "Titular criado com sucesso!",
                token
            })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }

    login = async (req: Request, res: Response) => {
        const input: HolderInputLoginDTO = {
            email: req.body.email,
            password: req.body.password
        }

        try {
            const token = await this.holderBusiness.login(input)

            res.status(200).send({ Message: token })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }
}