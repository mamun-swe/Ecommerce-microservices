
// import { NextFunction, Request, Response } from "express"
// import { verifyJwtToken } from "../helper"

// export const isCustomer = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token: any = await req.headers.authorization
//         if (!token) {
//             return res.status(404).json({
//                 status: false,
//                 errors: {
//                     message: "Login required."
//                 }
//             })
//         }

//         /* verify split token */
//         const splitToken = await token.split(' ')[1]
//         const decode = await verifyJwtToken(splitToken)

//         /* check role */
//         if (decode.role !== "customer") {
//             return res.status(501).json({
//                 status: false,
//                 errors: {
//                     message: "You have no access."
//                 }
//             })
//         }

//         req.user = {
//            id: decode.id,
//            name: decode.name,
//            role: decode.role
//         }
//         next()
//     } catch (error: any) {
//         if (error) {
//             console.log(error)

//             if (error.name === "TokenExpiredError") {
//                 return res.status(410).json({ message: "Authorization token expired." })
//             }
//             return res.status(501).json({ message: "Unauthorized request." })
//         }
//     }
// }