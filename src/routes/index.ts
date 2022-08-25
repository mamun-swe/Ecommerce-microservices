import { Router } from "express"
import { cartRouter } from "./cart.route"

export const router: Router = Router()

router.use("/", cartRouter)