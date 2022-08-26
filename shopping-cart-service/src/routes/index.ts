
import { Router } from "express"
import { cartRouter } from "./cart.route"
import { isCustomer } from "../middleware/permission.middleware"

export const router: Router = Router()

router.use("/", isCustomer, cartRouter)