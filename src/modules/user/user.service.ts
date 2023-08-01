import { ApplicationError } from "../../utils/ApplicationError";
import { UserNotFoundError } from "./user.error";

export const fetchUsers = () => {
    const user = {name: 'anjana'}

    if(user){
        throw new UserNotFoundError()
    }
    return user;
}

export const createUser = (user:any) => {
    return user
}