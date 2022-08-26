

import express from "express"
import * as CartController from "../controllers/cart.controller"
import { validator } from "../validators"

export const cartRouter = express.Router()

cartRouter.post("/", validator.cart.create, CartController.store)