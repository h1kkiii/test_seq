import { Router } from "express";
export const router = Router();

import { ctrl } from "../controllers/controllers.js";
import { userService } from "../services/user.services.js";
import { hashString } from "../helper/hashString.js";

router.post("/User", userService, ctrl.createUser); //
