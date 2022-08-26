

import express from "express"
import { validator } from "../validators"
import * as CartController from "../controllers/cart.controller"

export const cartRouter = express.Router()

cartRouter.get("/", CartController.index)
cartRouter.post("/", validator.cart.create, CartController.store)
cartRouter.put("/:id", validator.mongooseId.isValid, CartController.incQuantity)
cartRouter.put("/:id", validator.mongooseId.isValid, CartController.descQuantity)
cartRouter.delete("/:id", validator.mongooseId.isValid, CartController.destroy)