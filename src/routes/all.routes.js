import { Router } from "express";
export const router = Router();
import { ctrl } from "../controllers/controllers.js";
import { userSchema } from "../models/schemas/user.schemas.js";

router.post("/User", userSchema, ctrl.createUser);
router.get("/Users", ctrl.getUsers);
router.get("/User/:id", ctrl.getUserById);
router.put("/User/:id", ctrl.updateUserById);
router.delete("/User/:id", ctrl.deleteUserById);
