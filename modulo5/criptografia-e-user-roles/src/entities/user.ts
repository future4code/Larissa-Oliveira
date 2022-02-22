import { Users } from "./users";

export class User extends Users {

    constructor(
        id: string,
        email: string,
        password:string,
        role: string

    ) {
        super(
            id,
            email,
            password,
            role
        )
    }
} 