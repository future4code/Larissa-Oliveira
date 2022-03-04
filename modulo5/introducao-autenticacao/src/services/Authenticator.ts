import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types";
export class Authenticator {
    GenerateToken = (
        payload: AuthenticationData
    ) => {
        const token = jwt.sign(
            {
                id: payload.id,
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: "4s"
            }
        )
        return token;
    }

    GetTokenData = (
        token: string
    ) => {
        try {
            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as AuthenticationData
            return tokenData
        } catch (error) {
            console.log(error)
            return null
        }
    }
}