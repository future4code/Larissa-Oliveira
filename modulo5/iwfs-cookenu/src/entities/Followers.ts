export class Recipe {

    constructor(
        private id: string,
        private follow: string,
        private user_id: string,
    ) { }

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.follow, data.user_id)
    }

    public getUserInfo() {
        return {
            id: this.id,
            title: this.follow,
            description: this.user_id
        }
    }

    public getId(): string {
        return this.id
    }
    public getFollow(): string {
        return this.follow
    }
    public getUser_id(): string {
        return this.user_id
    }
}