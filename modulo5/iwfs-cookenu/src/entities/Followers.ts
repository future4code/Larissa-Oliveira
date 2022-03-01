export class Followers {

    constructor(
        private id: string,
        private follow: string,
        private user_id: string,
    ) { }

    static toFollowerModel(data: any): Followers {
        return new Followers(data.id, data.follow, data.user_id)
    }

    public getFollowerInfo() {
        return {
            id: this.id,
            title: this.follow,
            description: this.user_id
        }
    }

    public getId(): string {
        return this.id
    }
    public getFollow(){
        return this.follow
    }
    public getUser_id(): string {
        return this.user_id
    }
}