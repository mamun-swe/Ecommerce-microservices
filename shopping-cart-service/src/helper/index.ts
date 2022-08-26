
import Mongoose from "mongoose"
import { JwtPayloadType } from "../types"
import { verify as jwtVerify } from "jsonwebtoken"


/* Valid mongoose ID */
export const validMongooseId = (id: Mongoose.Types.ObjectId | string) => {
    return Mongoose.Types.ObjectId.isValid(id)
}


/* Verify jwt token */
export const verifyJwtToken = async (token: string): Promise<JwtPayloadType> => {
    const JWT_SECRET: any = process.env.JWT_SECRET
    const decodeToken: any = await jwtVerify(token, JWT_SECRET)

    return decodeToken
}
