import { Request, Response } from 'express'
import PostBusiness, { postingInputDTO } from '../../business/post/PostBusiness'
import PostData from '../../data/PostData'
import UserData from '../../data/UserData'

export default class UserController {
    private postBusiness: PostBusiness
    constructor() {
        this.postBusiness = new PostBusiness(new PostData)
    }

}