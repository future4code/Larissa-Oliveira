export class Users {
    protected id: string;
    protected email:string;
    protected password:string;
    protected role:string;
    

    constructor(
        id: string,
        email:string,
        password:string,
        role:string
    ){
        this.id = id,
        this.email = email,
        this.password = password
        this.role = role
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
    
    public getRole(): string {
        return this.role
    }
}