import { sequelize } from "../db/connection.js";
import { hashString } from "../helper/hashString.js";
import { compare } from "bcrypt";
import { environments } from "../config/environments.js";
import { User } from "../models/user.model.js";

export const userService = async (user) => {
  try {
    const hashedPassword = await hashString(user.password);
    user.password = hashedPassword;
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating user");
  }
};
