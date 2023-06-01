import { Router } from 'express';
import { createUser, getUsers, userLogin } from '../controllers/auth.controller.js';

const userRouter = Router();

userRouter.post("/signUp", createUser);
userRouter.post("/login", userLogin)
userRouter.get("/", getUsers)

export default userRouter;

