import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../model/User"

export class Authenticator {

  public generateToken(
    payload: AuthenticationData
  ): string {
    return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
        expiresIn: "24min"
      }
    )
  }

  public getTokenData(
    token: string
  ): AuthenticationData {
    const data = jwt.verify(
      token,
      process.env.JWT_KEY as string
    )
    return data as AuthenticationData
  }

}
