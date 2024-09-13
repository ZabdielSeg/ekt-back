
import User from "../models/User.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const registerUser = async (userData) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(userData.contraseña, salt);

  const newUser = new User({
    ...userData,
    contraseña: hashedPassword
  });

  return await newUser.save();
};


export const findUserByIdentifier = async (identifier) => {
  return await User.findOne({
    $or: [{ telefono: identifier }, { nombreUsuario: identifier }]
  });
};

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};


export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
