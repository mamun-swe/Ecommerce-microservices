import express from "express";
import { validators } from "../validators";
import { customerPermission } from "../middleware/permission.middleware"
import * as AuthController from "../controllers/customer/auth.controller";
import * as AccountController from "../controllers/customer/account.controller";

export const customerRouter = express.Router();

/* Authentication routes */
customerRouter.post("/register", validators.customer.create, AuthController.register);
customerRouter.post("/login", validators.customer.login, AuthController.login);
// cartRouter.put("/:id", validator.mongooseId.isValid, CartController.incQuantity)
// cartRouter.put("/:id", validator.mongooseId.isValid, CartController.descQuantity)
// cartRouter.delete("/:id", validator.mongooseId.isValid, CartController.destroy)


/* Account routes */
customerRouter.get("/account", customerPermission, AccountController.me);
customerRouter.put("/account", customerPermission, validators.customer.update, AccountController.update);