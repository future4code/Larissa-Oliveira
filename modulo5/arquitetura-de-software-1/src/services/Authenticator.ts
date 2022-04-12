import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types/user"


export class Authenticator {
  
  generateToken = (
    payload: authenticationData
  ): string => {
    return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
        expiresIn: "24min"
      }
    )
  }

  getTokenData = (
    token: string
  ): authenticationData => {
    return jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as authenticationData
  }

}

// export const authenticator = new Authenticator()