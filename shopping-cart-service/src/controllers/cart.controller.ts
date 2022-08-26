
import { NextFunction, Request, Response } from "express"
import { services } from "../services"


/* List of resources */
export const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const { customer } = req.user
        // const results = await services.shoppingCart.findAll({ customer })

        // res.status(200).json({
        //     status: true,
        //     data: results
        // })
    } catch (error:any) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}


/* Store new resource */
export const store = async (req: Request, res: Response, next: NextFunction) => {
    try {



        res.status(200).json({
            message: "ok",
            data: req.body
        })
    } catch (error: any) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}