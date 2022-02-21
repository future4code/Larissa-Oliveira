export class User {
    protected id: string;
    protected email:string;
    protected password:string;
    

    constructor(
        id: string,
        email:string,
        password:string
    ){
        this.id = id,
        this.email = email,
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email 
    }

    public getPassword(): string {
        return this.password
    }
}