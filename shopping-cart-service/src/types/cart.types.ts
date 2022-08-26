
import { Types } from "mongoose"

export type CartVariation = {
    name: string | null,
    value: string | null
}

export interface ICart {
    _id: Types.ObjectId,
    product: Types.ObjectId,
    quantity: number,
    customer: Types.ObjectId,
    variation: CartVariation
}

export interface ICartCreate {
    product: Types.ObjectId | string,
    quantity: number,
    customer: Types.ObjectId | string,
    variation?: CartVariation
}