import { User } from "../models/user.model.js";
export const ctrl = {};

//Se crea un usuario
ctrl.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUserC = new User({
      username,
      email,
      password,
    });

    await newUserC.save();

    return res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    console.log("Error al crear el usuario", error);
    return res.status(500).json({ message: "Error al crear el usuario" });
  }
};

//Se obtienen todos los usuarios
ctrl.getUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();

    return res.json(allUsers);
  } catch (error) {
    console.log("Error al obtener los usuarios", error);
    return res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

//Se obtiene un usuario por su ID
ctrl.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userById = await User.findByPk(id);
    if (!userById) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.json(userById);
  } catch (error) {
    console.log("Error al obtener el usuario por ID", error);
    return res
      .status(500)
      .json({ message: "Error al obtener el usuario por ID" });
  }
};

//Se actualiza un usuario por su ID
ctrl.updateUserById = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  try {
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    userToUpdate.username = username;
    userToUpdate.email = email;
    userToUpdate.password = password;
    await userToUpdate.save();
    return res.json(userToUpdate);
  } catch (error) {
    console.log("Error al actualizar el usuario", error);
    return res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

//Se elimina un usuario por su ID
ctrl.deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await userToDelete.destroy();
    return res.json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    console.log("Error al eliminar el usuario", error);
    return res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};
