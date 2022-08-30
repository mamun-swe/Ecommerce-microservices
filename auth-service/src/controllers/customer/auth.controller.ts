import { NextFunction, Request, Response } from "express";

/* Register an account */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(201).json({
      status: true,
      message: "Account created.",
    });
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};
