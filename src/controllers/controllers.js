import { Sequelize } from "sequelize";

// Create user
export const createUser = User.create({
  username: req.body,
  password: req.body,
});
