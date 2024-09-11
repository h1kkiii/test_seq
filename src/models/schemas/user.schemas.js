import { body } from "express-validator";
import { User } from "../models/user.model.js";

export const userSchema = [
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 5, max: 20 })
    .withMessage("Username must be between 5 and 20 characters long")
    .custom(async (username) => {
      const user = await User.findOne({ where: { username } });
      if (user) {
        throw new Error("Username already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 50 })
    .withMessage("Password must be between 8 and 50 characters long")
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "i")
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid")
    .custom(async (email) => {
      const user = await User.findOne({ where: { email } });
      if (user) {
        throw new Error("Email already exists");
      }
    }),
];
