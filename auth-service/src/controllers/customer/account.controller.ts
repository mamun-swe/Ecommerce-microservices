import { NextFunction, Request, Response } from "express";
import { services } from "../../services";
import { HttpErrorResponse, HttpSuccessResponse } from "./../../helper";

/* Request resource account details */
export const me = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const result = await services.customer.findById(id);

    res.status(200).json(
      await HttpSuccessResponse({
        status: true,
        message: "Account details fetch.",
        data: result,
      })
    );
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/* Request resource account details update */
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.user;

    /* check account available */
    const availableAccount = await services.customer.findById(id);
    if (!availableAccount) {
      return res.status(404).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "account",
              message: "Account not found.",
            },
          ],
        })
      );
    }

    /* Update account details */
    await services.customer.updateById(id, req.body);

    res.status(200).json(
      await HttpSuccessResponse({
        status: true,
        message: "Account updated.",
      })
    );
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};
