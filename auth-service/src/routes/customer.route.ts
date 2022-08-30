import express from "express";
import { validators } from "../validators";
import * as AuthController from "../controllers/customer/auth.controller";

export const customerRouter = express.Router();

customerRouter.post("/auth", validators.customer.create, AuthController.register);
// cartRouter.post("/", validator.cart.create, CartController.store)
// cartRouter.put("/:id", validator.mongooseId.isValid, CartController.incQuantity)
// cartRouter.put("/:id", validator.mongooseId.isValid, CartController.descQuantity)
// cartRouter.delete("/:id", validator.mongooseId.isValid, CartController.destroy)
