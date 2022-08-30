import { NextFunction, Request, Response } from "express";
import { validMongooseId } from "../helper";

/* Resource creation validaor */
export const isValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!validMongooseId(id)) {
    return res.status(422).json({
      status: false,
      errors: [
        {
          message: "ID isn't valid.",
          fieldValue: id,
          field: "id",
        },
      ],
    });
  }

  next();
};
