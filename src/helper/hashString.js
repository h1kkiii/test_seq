import bcrypt from "bcrypt";
import { hash, compare } from "bcrypt";

export const hashString = async (text) => {
  const saltRounds = 8;

  const salt = await bcrypt.genSalt(saltRounds);

  return await bcrypt.hash(text, salt);
};
