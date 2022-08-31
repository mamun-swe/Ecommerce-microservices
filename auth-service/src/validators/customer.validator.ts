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

/* Resource login validaor */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const descriptor = <any>{
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

/* Resource update validaor */
export const update = async (
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
    gender: {
      type: "enum",
      enum: ["Male", "Female", "Other"],
    },
    dob: {
      type: "date",
      required: true,
    },
    present_address: {
      type: "string",
      required: true,
      message: "Present address is required.",
    },
    permanent_address: {
      type: "string",
      required: true,
      message: "Permanent address is required.",
    },
    post_code: {
      type: "string",
      required: true,
      message: "Post code is required.",
    },
    post_office: {
      type: "string",
      required: true,
      message: "Post office is required.",
    },
    upazila: {
      type: "string",
      required: true,
      message: "Upazila is required.",
    },
    division: {
      type: "string",
      required: true,
      message: "Division is required.",
    },
    city: {
      type: "string",
      required: true,
      message: "City is required.",
    },
    country: {
      type: "string",
      required: true,
      message: "Country is required.",
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
