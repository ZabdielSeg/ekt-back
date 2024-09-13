import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import verifyToken from '../middlewares/jwt.middleware.js'

const router = Router();

router.get("/usuarios", verifyToken, getUsers)

export default router;
