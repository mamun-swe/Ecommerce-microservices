import Mongoose from "mongoose";

/* Valid mongoose ID */
export const validMongooseId = (id: Mongoose.Types.ObjectId | string) => {
  return Mongoose.Types.ObjectId.isValid(id);
};
