import express from "express"
import { LoginUser } from "../controllers/userController.ts";

const userRouter = express.Router();

userRouter.post('/login', LoginUser);

export default userRouter;