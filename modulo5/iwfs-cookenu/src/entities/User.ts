export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}


export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) { }

    static toUserModel(data: any) {
        return new User(data.id, data.name, data.email, data.password, data.role);
    }

    public getId(): string {
        return this.id
    }
    public getName(): string {
        return this.name
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