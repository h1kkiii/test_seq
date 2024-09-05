import { sequelize } from "../db/connection.js";
import { hashString } from "../helper/hashString.js";
import { compare } from "bcrypt";
import { environments } from "../config/environments.js";
import { UserModel } from "../models/user.model.js";

export const createUserSerice = async (user) => {
  try {
    const hashedPassword = hashString(user.password);
    user.password = hashedPassword;

    const newUser = await UserModel.create(user);
    return newUser;
  } catch (error) {
    res.status(404).json({ msg: "Error creating user" });
  }
};
