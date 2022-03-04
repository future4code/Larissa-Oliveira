import { JwtPayload, sign, verify } from "jsonwebtoken"
import { AuthenticationData } from "../types";
export class Authenticator {
    GenerateToken = (
        payload: AuthenticationData
    ) => {
        const token = sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: "500s"}
        )

        return token;
    }

    GetTokenData = (token: string) => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as JwtPayload

            return {
                id:tokenData.id,
                role:tokenData.role
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

}