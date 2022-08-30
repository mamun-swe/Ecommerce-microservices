import Schema from "async-validator";
import { NextFunction, Request, Response } from "express";

/* Resource creation validaor */
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const descriptor = <any>{
    name: {
      type: "string",
      required: true,
      message: "Name is required.",
    },
    email: {
      type: "string",
      required: true,
      pattern: Schema.validators.email,
    },
    password: {
      type: "string",
      required: true,
      message: "Password is required.",
    },
  };

  /* Execute the validator */
  const validator = new Schema(descriptor);

  validator.validate({ ...req.body }, (errors: any) => {
    if (errors) {
      return res.status(422).json({
        status: false,
        errors,
      });
    }
    next();
  });
};
