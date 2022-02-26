import { JwtPayload, sign, verify } from "jsonwebtoken"
import { isJSDocReturnTag } from "typescript";
import { USER_ROLES } from '../entities/User';

export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}

export class Authenticator {
    public GenerateToken(input: AuthenticationData): string {
        const token = sign(input, process.env.JWT_KEY as string, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        });
        return token;
    }

    public GetTokenData = (token: string) => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as JwtPayload

            return {
                id: tokenData.id,
                role: tokenData.role
            } as AuthenticationData

        } catch (error: any) {
            console.log(error)
            return null
        }
    }
}