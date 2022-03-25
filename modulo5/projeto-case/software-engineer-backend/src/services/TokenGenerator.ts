import * as jwt from "jsonwebtoken"
import { Authenticator } from "../model/authenticator/Authenticator"


export class TokenGenerator {

    public generateToken(
        payload: Authenticator
    ): string {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as string
            }
        )
    }

    public getTokenData(
        token: string
    ): Authenticator {
        const data = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )
        return data as Authenticator
    }

}