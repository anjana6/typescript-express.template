import { ApplicationError } from "../../utils/ApplicationError";
import {StatusCodes} from 'http-status-codes'

export class UserNotFoundError extends ApplicationError{
    constructor(message = 'User not found'){
        super(message, StatusCodes.NOT_FOUND)
    }
}