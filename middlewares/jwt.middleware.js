import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.header('x-token');
  if (!token) return res.status(403).json({ message: 'Acceso denegado' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token no válido' });
  }
}

export default verifyToken;
