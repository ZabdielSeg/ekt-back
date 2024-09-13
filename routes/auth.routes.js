import { Router } from "express";
const router = Router();

import AuthController from "../controllers/auth.controller.js";
import { validarLogin, validarRegistro } from "../middlewares/validation.middleware.js";

router.post('/registro', validarRegistro, AuthController.registrar);
router.post('/login', validarLogin, AuthController.login)
router.post('/logout', AuthController.logout);


export default router;
