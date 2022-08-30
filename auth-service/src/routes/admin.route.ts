import express from "express";
import { validators } from "../validators";
import * as AuthController from "../controllers/admin/auth.controller";

export const adminRouter = express.Router();

adminRouter.post("/auth", validators.admin.create, AuthController.register);
