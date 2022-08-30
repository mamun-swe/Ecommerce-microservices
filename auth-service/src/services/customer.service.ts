import { Models } from "../models";
import {
  ICustomer,
  ICustomerCreation,
  ICustomerUpdate,
} from "./../types/customer.types";

/* find specific resource by Id */
const findById = async (id: string): Promise<ICustomer | null> => {
  return await Models.Customer.findById(id).populate(
    "blocked_by",
    "name email profile_image"
  );
};

/* find specific resource by key */
const findOne = async (params: any): Promise<ICustomer | null> => {
  return await Models.Customer.findOne({ ...params }).populate(
    "blocked_by",
    "name email profile_image"
  );
};

/* create new resource */
const create = async (data: ICustomerCreation): Promise<ICustomer | null> => {
  const newCustomer = new Models.Customer({
    name: data.name,
    email: data.email,
    password: data.password,
  });

  return await newCustomer.save();
};

/* update specific resource */
const updateById = async (
  id: string,
  data: ICustomerUpdate
): Promise<ICustomer | null> => {
  return await Models.Customer.findByIdAndUpdate(id, { $set: { ...data } });
};

export const customer = {
  findById,
  findOne,
  create,
  updateById,
};
