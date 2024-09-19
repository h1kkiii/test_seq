import { hashString } from "../helper/hashString.js";
import { User } from "../models/user.model.js";

export const userService = async (userData) => {
  try {
    const hashedPassword = await hashString(userData.password);
    userData.password = hashedPassword;
    const newUser = await User.create(userData);
    console.log(newUser);
    return newUser;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating user");
  }
};
