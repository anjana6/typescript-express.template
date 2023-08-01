import { Request,Response,NextFunction } from "express";
import { ApplicationError } from "../utils/ApplicationError";

const errorHandler = (error:any, req:Request, res:Response, next:NextFunction) =>{
    if(error instanceof ApplicationError){
        return res.status(error.statusCode).json(error.message)
    }
    return res.status(500).json('Internal server error')
}


export default errorHandler;