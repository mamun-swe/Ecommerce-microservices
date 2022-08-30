import { Router } from "express";
import { adminRouter } from "./admin.route";
import { customerRouter } from "./customer.route";
// import { isCustomer } from "../middleware/permission.middleware"

export const router: Router = Router();

router.use("/admin", adminRouter);
router.use("/customer", customerRouter);
