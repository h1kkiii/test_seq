import { bcrypt } from "bcrypt";

export const hashString = async (text) => {
  const salt = await bcrypt.genSalt(text);

  return await bcrypt.hash(text, salt);
};
