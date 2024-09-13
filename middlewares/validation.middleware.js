const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{1,40}$/;
const telefonoRegex = /^[0-9]{10}$/;
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nombreUsuarioRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ_]{1,30}$/;

export const validarRegistro = (req, res, next) => {
  const { nombre, apellidoPaterno, apellidoMaterno, telefono, correo, nombreUsuario, contraseña } = req.body;

  if (!nombre || !nombreRegex.test(nombre)) return res.status(400).json({ message: 'Nombre inválido' });
  if (!apellidoPaterno || !nombreRegex.test(apellidoPaterno)) return res.status(400).json({ message: 'Apellido paterno inválido' });
  if (apellidoMaterno && !nombreRegex.test(apellidoMaterno)) return res.status(400).json({ message: 'Apellido materno inválido' });
  if (!telefono || !telefonoRegex.test(telefono)) return res.status(400).json({ message: 'Número de teléfono inválido' });
  if (correo && !correoRegex.test(correo)) return res.status(400).json({ message: 'Correo electrónico inválido' });
  if (!nombreUsuario || !nombreUsuarioRegex.test(nombreUsuario)) return res.status(400).json({ message: 'Nombre de usuario inválido' });
  if (!contraseña || contraseña.length < 8 || contraseña.length > 20) return res.status(400).json({ message: 'Contraseña inválida' });

  next(); 
};

export const validarLogin = (req, res, next) => {
  const { identificador, contraseña } = req.body;

  if (!identificador || !contraseña) {
    return res.status(400).json({ message: 'Identificador y contraseña son requeridos' });
  }

  next();
};
