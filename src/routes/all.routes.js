import { Router } from "express";
import { createUser } from "../controllers/controllers.js";
import { createUserSerice } from "../services/user.services.js";

export const userRouter = new Router();

userRouter.post("/user", createUser, createUserSerice);
