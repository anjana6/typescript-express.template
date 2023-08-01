import {Request,Response} from 'express'
import { tryCatch } from '../../utils/tryCatch'
import * as UserService from './user.service'
import { validateUserCreateParam } from './user.middleware'

const _handleFetchUsers = tryCatch(async (req:Request,res: Response) => {
    const user = await UserService.fetchUsers()
    res.status(200).json(user)
})

const _handleCreateUser = tryCatch(async(req:Request, res:Response) => {
    const user = await UserService.createUser(req.body)
    res.status(200).json(user)
})

export const handleFetchUsers = [
    _handleFetchUsers
]

export const handleCreateUser = [
    validateUserCreateParam,
    _handleCreateUser
]

