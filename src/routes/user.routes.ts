import { Router } from "express";
import * as UserController from '../modules/user/user.controller'

const UserRouter = Router();

UserRouter.get('/', UserController.handleFetchUsers)
UserRouter.post('/', UserController.handleCreateUser)

export default UserRouter