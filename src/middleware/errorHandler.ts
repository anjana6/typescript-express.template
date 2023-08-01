import { Request,Response,NextFunction } from "express";
import { ApplicationError } from "../utils/ApplicationError";
import { errors, isCelebrateError } from 'celebrate'

const celebrateErrorHandler = errors()

const errorHandler = (error:any, req:Request, res:Response, next:NextFunction) =>{

    if (isCelebrateError(error)) {
        // logger.error({
        //   message: 'Joi validation error',
        //   meta: {
        //     ...log_meta,
        //     details: Object.fromEntries(err.details),
        //   },
        //   error: err,
        // })
        return celebrateErrorHandler(error, req, res, next)
      }
    if(error instanceof ApplicationError){
        return res.status(error.statusCode).json(error.message)
    }
    return res.status(500).json(error)
}


export default errorHandler;