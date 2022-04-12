export class Recipe {

    constructor(
        private id: string,
        private title: string,
        private description: string,
        private creationDate: string,
        private creatorId : string,
        private creatorName : string
    ) { }

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.creationDate, data.creatorId, data.creatorName)
    }

    public getUserInfo() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            creationDate: this.creationDate,
            creatorId: this.creatorId,
            creatorName: this.creatorName
        }
    }

    public getId(): string {
        return this.id
    }
    public getTitle(): string {
        return this.title
    }
    public getDescription(): string {
        return this.description
    }
    public getCreationDate(): string {
        return this.creationDate
    }
    public getCreatorId(): string {
        return this.creatorId
    }
    public getCreatorName(): string {
        return this.creatorName
    }
}