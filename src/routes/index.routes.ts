import { Router } from "express";
import UserRouter from "./user.routes";
import PostRouter from "./post.routes";

const ApiRoute = Router()

ApiRoute.use('/user', UserRouter)
ApiRoute.use('/post', PostRouter)

export default ApiRoute