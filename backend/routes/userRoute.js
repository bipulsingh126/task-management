import express from 'express'
import { signIn } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post('/sign-in', signIn);

export default userRouter;
