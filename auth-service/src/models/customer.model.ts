import { Schema, model } from "mongoose";
import { ICustomer } from "../types/customer.types";

const customerSchema: Schema = new Schema<ICustomer>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    gender: {
      type: String,
      trim: true,
      default: null,
      enum: [null, "Male", "Female", "Other"],
    },
    dob: {
      type: Date,
      trim: true,
      default: null,
    },
    present_address: {
      type: String,
      trim: true,
      default: null,
    },
    permanent_address: {
      type: String,
      trim: true,
      default: null,
    },
    post_code: {
      type: String,
      trim: true,
      default: null,
    },
    post_office: {
      type: String,
      trim: true,
      default: null,
    },
    upazila: {
      type: String,
      trim: true,
      default: null,
    },
    division: {
      type: String,
      trim: true,
      default: null,
    },
    country: {
      type: String,
      trim: true,
      default: null,
    },
    profile_image: {
      type: String,
      trim: true,
      default: null,
    },
    role: {
      type: String,
      trim: true,
      default: "Customer",
    },
    is_online: {
      type: Boolean,
      default: false,
    },
    account_status: {
      type: String,
      trim: true,
      default: "active",
      enum: ["active", "blocked"],
    },
    blocked_by: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      default: null,
    },
    blocked_at: {
      type: Date,
      default: null,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Customer = model<ICustomer>("Customer", customerSchema);
