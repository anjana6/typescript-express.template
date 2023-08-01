import {Request,Response} from 'express'

const _handleFetchUsers = (req:Request,res: Response) => {
    res.status(200).json('test user')
}

const _handleCreateUser = (req:Request, res:Response) => {
    res.status(200).json('create User')
}

export const handleFetchUsers = [
    _handleFetchUsers
]

export const handleCreateUser = [
    _handleCreateUser
]

