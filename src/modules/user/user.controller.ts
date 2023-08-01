import {Request,Response} from 'express'
import { tryCatch } from '../../utils/tryCatch'
import * as UserService from './user.service'
import { validateUserCreateParam } from './user.middleware'
import { StatusCodes } from 'http-status-codes'

const _handleFetchUsers = async (req:Request,res: Response) => {
    const user = await UserService.fetchUsers()
    res.status(StatusCodes.OK).json(user)
}

const _handleCreateUser = async(req:Request, res:Response) => {
    const user = await UserService.createUser(req.body)
    res.status(StatusCodes.CREATED).json(user)
}

export const handleFetchUsers = [
    tryCatch(_handleFetchUsers) 
]

export const handleCreateUser = [
    validateUserCreateParam,
    tryCatch(_handleCreateUser)
]

