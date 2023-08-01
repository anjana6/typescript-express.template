import {Request,Response} from 'express'
import { tryCatch } from '../../utils/tryCatch'
import * as UserService from './user.service'

const _handleFetchUsers = tryCatch(async (req:Request,res: Response) => {
    const user = await UserService.fetchUsers()
    res.status(200).json(user)
})

const _handleCreateUser = (req:Request, res:Response) => {
    res.status(200).json('create User')
}

export const handleFetchUsers = [
    _handleFetchUsers
]

export const handleCreateUser = [
    _handleCreateUser
]

