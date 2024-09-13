import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    nombre: { type: String, required: true, maxlength: 40 },
    apellidoPaterno: { type: String, required: true, maxlength: 40 },
    apellidoMaterno: { type: String, maxlength: 40 },
    telefono: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    correo: { type: String, maxlength: 40, unique: true },
    nombreUsuario: {
      type: String,
      required: true,
      unique: true,
      maxlength: 30,
    },
    contraseña: { type: String, required: true,},
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
