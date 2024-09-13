import { findUserByIdentifier, registerUser, comparePassword, generateToken } from '../services/auth.service.js';

class AuthController {

  static async registrar(req, res) {
    try {
      const user = await findUserByIdentifier(req.body.nombreUsuario);
      if(user) return res.status(400).json({ message: 'El usuario ya está registrado.' });
  
      const newUser = await registerUser(req.body);
      res.status(201).json({ message: "Usuario registrado exitosamente" });
    } catch (err) {
      res.status(500).json({ errorMessage: "Error en el servidor", err });
    }
  }

  static async login(req, res) {
    const { identificador, contraseña } = req.body;
    

    try {
      const user = await findUserByIdentifier(identificador);
      
      if (!user) return res.status(404).json({ errorMessage: "Credenciales incorrectas" });

      const validPassword = comparePassword(
        contraseña,
        user.contraseña
      );

      if (!validPassword) return res.status(400).json({ errorMessage: "Credenciales incorrectas" });
      

      const token = generateToken(user._id);
      console.log(token);
      
      res.json({
        message: "Login exitoso",
        user: {
          id: user._id,
          nombre: user.nombre,
          apellidoPaterno: user.apellidoPaterno,
          telefono: user.telefono,
          correo: user.correo,
        },
        token,
      });
    } catch (err) {
      res.status(500).json({ errorMessage: "Error en el servidor", err });
    }
  }

  static async logout(req, res){
    return res.status(200).json({ message: 'Logout exitoso' });
  }
}

export default AuthController;