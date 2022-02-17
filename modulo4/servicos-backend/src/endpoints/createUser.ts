import { Request, Response } from "express"
import { getAddressInfo } from "../services/getAddressInfo"
import { mailTransporter } from "../services/mailTransporter"

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password, cep } = req.body

        const address = await getAddressInfo(cep)

        if (!address) {
            throw new Error("Deu ruim no serviço getAddressInfo")
        }

        const info = await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Cadastro na plataforma API",
            text: `Olá, ${email}! Parabéns pela inscrição!
            Segue abaixo seus dados:
            SENHA: ${password}
            ENDEREÇO: ${address.city}/${address.state} ${address.neighborhood}, ${address.street}`,
            html: `<p>Olá, ${email}! <strong>Parabéns pela inscrição!</strong>
            Segue abaixo seus dados:
            SENHA: <em>${password}</em>
            ENDEREÇO: ${address.city}/${address.state} ${address.neighborhood}, ${address.street}</p>`
        })

        res.send({ info, message: "Cadastro realizado com sucesso" })

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}