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
            pattern: Schema.validators.email
        },
        gender: {
            type: "enum",
            enum: ["Male", "Female", "Other"]
        },
        dob: {
            type: "date",
            required: true,
            message: "Date of birth is required.",
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
        country: {
            type: "string",
            required: true,
            message: "Country is required.",
        },
        profile_image: {
            type: "url",
            required: true
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
