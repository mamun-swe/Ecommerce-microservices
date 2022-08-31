import { Types } from "mongoose";

export interface ICustomer {
  _id: Types.ObjectId;
  name: string;
  email: string;
  gender: null | "Male" | "Female" | "Other";
  dob: Date | null;
  profile_image: string | null;
  present_address: string | null;
  permanent_address: string | null;
  post_code: string | null;
  post_office: string | null;
  upazila: string | null;
  division: string | null;
  city: string | null;
  country: string | null;
  role: "Customer";
  is_online: boolean;
  account_status: "active" | "blocked";
  blocked_by: null | Types.ObjectId;
  blocked_at: Date | null;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICustomerCreation {
  name: string;
  email: string;
  password: string;
}

export interface ICustomerUpdate {
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
