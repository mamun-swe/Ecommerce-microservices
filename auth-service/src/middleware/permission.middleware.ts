import { NextFunction, Request, Response } from "express";
import { verifyAccessToken, HttpErrorResponse } from "../helper";

/* Customer permission */
export const customerPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token: any = await req.headers.authorization;
    if (!token) {
      return res.status(407).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "authentication",
              message: "Login required to access.",
            },
          ],
        })
      );
    }

    /* verify split token */
    const splitToken = await token.split(" ")[1];
    const decodedToken = await verifyAccessToken(splitToken);

    /* check role */
    if (decodedToken.role !== "Customer") {
      return res.status(501).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "authentication",
              message: "You have no permission to access.",
            },
          ],
        })
      );
    }

    req.user = {
      id: decodedToken.id,
      name: decodedToken.name,
      role: decodedToken.role,
    };

    next();
  } catch (error: any) {
    if (error) {
      console.log(error);

      /* Token expire error */
      if (error.name === "TokenExpiredError") {
        return res.status(406).json(
          await HttpErrorResponse({
            status: false,
            errors: [
              {
                field: "authentication",
                message: "Authorization token expired.",
              },
            ],
          })
        );
      }

      /* Invalid token error */
      if (error.name === "JsonWebTokenError") {
        return res.status(406).json(
          await HttpErrorResponse({
            status: false,
            errors: [
              {
                field: "authentication",
                message: "Invalid authorization token.",
              },
            ],
          })
        );
      }

      return res.status(401).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "authentication",
              message: "Unauthorized request.",
            },
          ],
        })
      );
    }
  }
};
