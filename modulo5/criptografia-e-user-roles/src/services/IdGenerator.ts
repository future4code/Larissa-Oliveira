import {v4} from "uuid"


export class IdGenerator {
    private id: string
    constructor(){
        this.id = v4()
    }
    public getId(){
        return this.id
    }
}