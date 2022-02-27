import { JwtPayload, sign, verify } from "jsonwebtoken"
import { USER_ROLES } from '../entities/User';

export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}

export class Authenticator {
    public GenerateToken = (input: AuthenticationData): string => {
        const token = sign(
            {
                id: input.id,
                role: input.role
            },
            process.env.JWT_KEY as string,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
        );
        console.log(`Esta chegando aqui`)
        return token;
    }

    public GetTokenData = (token: string) => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as JwtPayload

            const result = {
                id: tokenData.id,
                role: tokenData.role
            }

            return result
        } catch (error: any) {
            console.log(error)
            return null
        }
    }
}