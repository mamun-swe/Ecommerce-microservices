
import Schema from "async-validator"
import { NextFunction, Request, Response } from "express"
import { validMongooseId } from "../helper"


/* Resource creation validaor */
export const create = async (req: Request, res: Response, next: NextFunction) => {
    const descriptor = <any>{
        product: [
            { type: 'string', required: true, message: 'Product id is required.' },
            {
                validator(rule: any, value: any, callback: any, source: any, options: any) {
                    const errors: any = [];
                    if (!validMongooseId(value)) {
                        errors.push({
                            message: "Product id isn't valid.",
                            fieldValue: value,
                            field: "product"
                        })
                    }

                    return errors
                },
            }
        ],
        quantity: {
            type: 'number',
            required: true
        },
    }

    /* Execute validator */
    const validator = new Schema(descriptor)

    validator.validate({ ...req.body }, (errors: any) => {
        if (errors) {
            return res.status(422).json({
                status: false,
                errors
            })
        }
        next()
    })
}

