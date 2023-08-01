import { ApplicationError } from "../../utils/ApplicationError";

export const fetchUsers = () => {
    const user = {name: 'anjana'}

    if(user){
        throw new ApplicationError('User not found',400)
    }
    return user;
}

export const createUser = (user:any) => {
    return user
}