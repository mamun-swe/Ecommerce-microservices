import { Schema, model } from "mongoose";
import { IAdmin } from "../types/admin.types";

const adminSchema: Schema = new Schema<IAdmin>(
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
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    dob: {
      type: Date,
      trim: true,
      required: true,
    },
    present_address: {
      type: String,
      trim: true,
      required: true,
    },
    permanent_address: {
      type: String,
      trim: true,
      required: true,
    },
    post_code: {
      type: String,
      trim: true,
      required: true,
    },
    post_office: {
      type: String,
      trim: true,
      required: true,
    },
    upazila: {
      type: String,
      trim: true,
      required: true,
    },
    division: {
      type: String,
      trim: true,
      required: true,
    },
    country: {
      type: String,
      trim: true,
      required: true,
    },
    profile_image: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      trim: true,
      default: "Admin",
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

export const Admin = model<IAdmin>("Admin", adminSchema);
