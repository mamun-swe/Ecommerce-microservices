import { accessToken, comparePassword } from "./../../helper/index";
import { NextFunction, Request, Response } from "express";
import {
  encryptPassword,
  HttpErrorResponse,
  HttpSuccessResponse,
} from "../../helper";
import { services } from "../../services";

/* Register an account */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    /* Check exist account with email */
    const isExistWithEmail = await services.customer.findOne({ email });
    if (isExistWithEmail) {
      return res.status(409).json(
        await HttpErrorResponse({
          status: false,
          errors: [{ field: "email", message: "Email already exist." }],
        })
      );
    }

    /* generate hash password */
    const hanshPassword = await encryptPassword(password);

    /* documents for create customer */
    const documents = {
      name,
      email,
      password: hanshPassword,
    };

    /* save to database */
    const createdAccount = await services.customer.create(documents);
    if (!createdAccount) {
      return res.status(501).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            { field: "server_error", message: "Failed to create account." },
          ],
        })
      );
    }

    /* generate access token */
    const jwtAccessToken = await accessToken({
      id: createdAccount._id.toString(),
      name: createdAccount.name,
      role: createdAccount.role,
    });

    res.status(201).json(
      await HttpSuccessResponse({
        status: true,
        message: "Account created.",
        token: jwtAccessToken,
      })
    );
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/* Login to account */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    /* find available account */
    const availableAccount = await services.customer.findOne({ email });
    if (!availableAccount) {
      return res.status(404).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "credential",
              message: "Invalid credentials.",
            },
          ],
        })
      );
    }

    /* compare password */
    const isPasswordMatch = await comparePassword(
      password,
      availableAccount.password
    );
    if (!isPasswordMatch) {
      return res.status(404).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "credential",
              message: "Invalid credentials.",
            },
          ],
        })
      );
    }

    /* generate access token */
    const jwtAccessToken = await accessToken({
      id: availableAccount._id.toString(),
      name: availableAccount.name,
      role: availableAccount.role,
    });

    res.status(200).json(
      await HttpSuccessResponse({
        status: true,
        message: "Successfully loggedin.",
        token: jwtAccessToken,
      })
    );
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};
