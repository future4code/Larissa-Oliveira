export enum USER_TYPES {
    NORMAL = "NORMAL",
    ADMIN = "EVENT"
}

export type authenticationData = {
    id: string
}

export default class Post {

    constructor(
        public id: string,
        public author_id: string,
        public author_name: string,
        public image: string,
        public description: string,
        public type: USER_TYPES
    ) { }
}