
import { Cart } from "../models/cart.model"
import { ICart } from "../types/cart.types"


/* Find specific resource for specific customer */
const findOne = async ({ customer, cartId }: { customer: string, cartId: string }) => {
    return await Cart.findOne({
        $and: [
            { _id: cartId },
            { customer }
        ]
    })
}


/* Find all resources */
const findAll = async ({ customer }: { customer: string }) => {
    return await Cart.find({ customer })
}


/* Create new resource */
const createCart = async (data: ICart) => {
    const newCart = new Cart({
        customer: data.customer,
        product: data.product,
        attribute: {
            name: data.variation?.name || null,
            value: data.variation?.value || null
        }
    })

    return await newCart.save()
}


/* Find specific resource and increment quantity */
const findOneAndIncQuantity = async ({ customer, cartId }: { customer: string, cartId: string }) => {
    return await Cart.findOneAndUpdate(
        {
            $and: [
                { _id: cartId },
                { customer }
            ]
        },
        { $inc: { quantity: 1 } }
    )
}


/* Find specific resource and decrement quantity */
const findOneAndDescQuantity = async ({ customer, cartId }: { customer: string, cartId: string }) => {
    return await Cart.findOneAndUpdate(
        {
            $and: [
                { _id: cartId },
                { customer }
            ]
        },
        { $inc: { quantity: -1 } }
    )
}


/* Delete specific resource */
const findOneAndDestroy = async ({ customer, cartId }: { customer: string, cartId: string }) => {
    return await Cart.findOneAndDelete(
        {
            $and: [
                { _id: cartId },
                { customer }
            ]
        }
    )
}


/* Find product by specific customer */
const findOneByProductId = async ({ customer, product }: { customer: string, product: string }) => {
    return await Cart.findOne({
        $and: [
            { product },
            { customer }
        ]
    })
}


export const shoppingCart = {
    findOne,
    findAll,
    createCart,
    findOneAndIncQuantity,
    findOneAndDescQuantity,
    findOneAndDestroy,
    findOneByProductId
}