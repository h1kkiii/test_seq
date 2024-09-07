import { Router } from "express";
export const router = Router();

import { ctrl } from "../controllers/controllers.js";
import { userService } from "../services/user.services.js";

router.post("/User", userService, ctrl.createUser); //
