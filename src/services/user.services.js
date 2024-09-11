import { hashString } from "../helper/hashString.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

/*export const userService = async (user) => {
  try {
    const hashedPassword = await hashString(User.password);
    User.password = hashedPassword;
    const newUser = await User.create(User);
    return newUser;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating user");
  }
};*/
