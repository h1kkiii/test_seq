import { User } from "../models/user.model.js";
export const ctrl = {};

ctrl.createUser = async (req, res) => {
  const { username, email, password } = req.body; // JSON.stringify(reserva);

  try {
    // Se crea una nueva instancia de reserva
    const newUser = new User({
      username,
      email,
      password,
    });

    // Se guarda en la BD
    await newUser.save();

    return res.status(201).json({ message: "Usuario creada con éxito" });
  } catch (error) {
    console.log("Error al crear el usuario", error);
    return res.status(500).json({ message: "Error al crear el usuario" });
  }
};
