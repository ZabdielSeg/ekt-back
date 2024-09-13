import "dotenv/config";

// ℹ️ Connects to the database
import "./db/index.js";

import express, { json, urlencoded } from "express";
import cors from "cors";

const app = express();

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

app.set("trust proxy", 1);

app.use(
  cors({
    origin: [FRONTEND_URL,],
    credentials: true,
  })
);

app.use(json());
app.use(urlencoded({ extended: false }));

// Start handling routes
import indexRoutes from "./routes/user.routes.js";
app.use("/api/user", indexRoutes);

import authRoutes from "./routes/auth.routes.js";
app.use("/api/auth", authRoutes);

export default app;
