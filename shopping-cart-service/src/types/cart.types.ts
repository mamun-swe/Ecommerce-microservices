
import { Types } from "mongoose"

export type CartVariation = {
    name?: string | null,
    value?: string | null
}

export interface ICart {
    product: Types.ObjectId,
    quantity: number,
    customer: Types.ObjectId,
    variation?: CartVariation
}