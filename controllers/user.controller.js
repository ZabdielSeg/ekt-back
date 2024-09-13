import User from '../models/User.model.js';

  export const getUsers = async (req, res) => {
    try {
      const users = await User.find({}, '-contraseña');
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Error en el servidor', err });
    }
  }