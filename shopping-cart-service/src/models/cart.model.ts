
import { Schema, model } from "mongoose"
import { ICart } from "../types/cart.types"

const cartSchema: Schema = new Schema<ICart>({
    customer: {
        type: Schema.Types.ObjectId,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    variation: {
        name: {
            type: String,
            default: null
        },
        value: {
            type: String,
            default: null
        }
    }
}, {
    timestamps: true
})

export const Cart = model<ICart>("Cart", cartSchema)