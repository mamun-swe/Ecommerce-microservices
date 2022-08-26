
import { NextFunction, Request, Response } from "express"
import { services } from "../services"


/* List of resources */
export const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user
        const results = await services.shoppingCart.findAll({ customer: id })

        res.status(200).json({
            status: true,
            data: results
        })
    } catch (error: any) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}


/* Store new resource */
export const store = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user
        const { product, quantity, variation } = req.body

        const documents = {
            customer: id,
            product,
            quantity,
            variation: {
                name: variation.name || null,
                value: variation.value || null
            }
        }

        /* Check exist to cart product & increment quantity */
        const isExistProduct = await services.shoppingCart.findOneByProductId({ customer: id, product })
        if (isExistProduct) {
            const incrementProductQuantity = await services.shoppingCart.findOneAndIncQuantity({ customer: id, cartId: isExistProduct._id.toString() })
            if (incrementProductQuantity) {
                return res.status(200).json({
                    status: true,
                    message: "Product quantity updated."
                })
            }
        }

        /* Create new cart */
        await services.shoppingCart.createCart(documents)


        res.status(201).json({
            status: true,
            message: "Product added to the cart."
        })
    } catch (error: any) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}


/* Increment specific resource quantity */
export const incQuantity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user
        const { id: cart_id } = req.params

        /* Check available */
        const availableProduct = await services.shoppingCart.findOne({ customer: id, cartId: cart_id })
        if (!availableProduct) {
            return res.status(404).json({
                status: false,
                errors: {
                    message: 'Product not found to the cart.'
                }
            })
        }

        /* Update the cart quantity */
        await services.shoppingCart.findOneAndIncQuantity({ customer: id, cartId: cart_id })

        return res.status(200).json({
            status: true,
            message: "Product quantity updated."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}


/* Decrement specific resource quantity */
export const descQuantity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user
        const { id: cart_id } = req.params

        /* Check available */
        const availableProduct = await services.shoppingCart.findOne({ customer: id, cartId: cart_id })
        if (!availableProduct) {
            return res.status(404).json({
                status: false,
                errors: {
                    message: 'Product not found to the cart.'
                }
            })
        }

        /* Update the cart quantity */
        await services.shoppingCart.findOneAndIncQuantity({ customer: id, cartId: cart_id })

        return res.status(200).json({
            status: true,
            message: "Product quantity updated."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}


/* Destroy specific resource */
export const destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user
        const { id: cart_id } = req.params

        /* Check available */
        const availableItem = await services.shoppingCart.findOne({ customer: id, cartId: cart_id })
        if (!availableItem) {
            return res.status(404).json({
                status: false,
                errors: {
                    message: 'Product not found to the cart.'
                }
            })
        }

        /* Delete resource from cart */
        await services.shoppingCart.findOneAndDestroy({ customer: id, cartId: cart_id })

        return res.status(200).json({
            status: true,
            message: "Product removed from the cart."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}