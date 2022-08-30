import Mongoose from "mongoose";
import { hash, compare } from "bcrypt";
import { sign as jwtSign, verify as jwtVerify } from "jsonwebtoken";
import {
  IJwtPayload,
  IHttpErrorResponse,
  IHttpSuccessResponse,
} from "../types";

/* Valid mongoose ID */
export const validMongooseId = (id: Mongoose.Types.ObjectId | string) => {
  return Mongoose.Types.ObjectId.isValid(id);
};

/* Password encrypt */
export const encryptPassword = async (data: string): Promise<string> => {
  return await hash(data, 10);
};

/* Compare encrypted password */
export const comparePassword = async (
  plainPassword: string,
  hashPassword: string
): Promise<boolean> => {
  return await compare(plainPassword, hashPassword);
};

/* generate access token */
export const accessToken = async (payload: IJwtPayload): Promise<string> => {
  const JWT_SECRET: any = process.env.JWT_SECRET;
  const token = await jwtSign(
    {
      id: payload.id,
      name: payload.name,
      role: payload.role,
    },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};

/* Verify access token */
export const verifyAccessToken = async (
  token: string
): Promise<IJwtPayload> => {
  const JWT_SECRET: any = process.env.JWT_SECRET;
  const decodeToken: any = await jwtVerify(token, JWT_SECRET);

  return decodeToken;
};

/* Http error response */
export const HttpErrorResponse = async (
  payload: IHttpErrorResponse
): Promise<IHttpErrorResponse> => {
  return {
    status: payload.status,
    errors: [...payload.errors],
  };
};

/* Http success response */
export const HttpSuccessResponse = async (
  payload: IHttpSuccessResponse
): Promise<IHttpSuccessResponse> => {
  return {
    status: payload.status,
    message: payload.message,
  };
};
