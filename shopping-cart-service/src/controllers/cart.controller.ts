
import { NextFunction, Request, Response } from "express"


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