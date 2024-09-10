import { Router } from "express";
export const router = Router();

import { ctrl } from "../controllers/controllers.js";

router.post("/User", ctrl.createUser);
router.get("/Users", ctrl.getUsers);
router.get("/User/:id", ctrl.getUserById);
router.put("/User/:id", ctrl.updateUserById);
router.delete("/User/:id", ctrl.deleteUserById);
