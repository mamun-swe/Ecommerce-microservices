import { Types } from "mongoose";

export interface IAdmin {
  _id: Types.ObjectId;
  name: string;
  email: string;
  gender: "Male" | "Female" | "Other";
  dob: Date;
  profile_image: string;
  present_address: string;
  permanent_address: string;
  post_code: string;
  post_office: string;
  upazila: string;
  division: string;
  city: string;
  country: string;
  role: "Admin";
  is_online: boolean;
  account_status: "active" | "blocked";
  blocked_by: Types.ObjectId | null;
  blocked_at: Date | null;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAdminCreation {
  name: string;
  email: string;
  password: string;
}

export interface IAdminUpdate {
  name: string;
  gender: "Male" | "Female" | "Other";
  dob: Date;
  present_address: string;
  permanent_address: string;
  post_code: string;
  post_office: string;
  upazila: string;
  division: string;
  city: string;
  country: string;
}
