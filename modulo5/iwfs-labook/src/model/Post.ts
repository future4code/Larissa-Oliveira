export enum USER_TYPES {
    NORMAL = "NORMAL",
    ADMIN = "EVENT"
}

export type authenticationData = {
    id: string
}

export default class Post {

    constructor(
        private _id: string,
        private _image: string,
        private _description: string,
        private _date: Date,
        private _type: USER_TYPES,
        private _authorId: string,
    ) { }

    public get authorId(): string {
        return this._authorId
    }
    public set authorId(value: string) {
        this._authorId = value
    }
    public get type(): USER_TYPES {
        return this._type
    }
    public set type(value: USER_TYPES) {
        this._type = value
    }
    public get date(): Date {
        return this._date
    }
    public set date(value: Date) {
        this._date = value
    }
    public get description(): string {
        return this._description
    }
    public set description(value: string) {
        this._description = value
    }
    public get image(): string {
        return this._image
    }
    public set image(value: string) {
        this._image = value
    }
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }


}