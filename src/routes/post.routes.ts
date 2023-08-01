import { Router } from "express";
import * as PostController from '../modules/post/post.controller'

const PostRouter = Router()

PostRouter.get('/', PostController.handleFetchPost )

export default PostRouter