import { Request,Response } from "express"

export const handleFetchPost = (req:Request,res:Response) => {

    return res.status(200).json('This is post')

}