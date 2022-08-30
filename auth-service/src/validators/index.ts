import * as admin from "./admin.validator";
import * as customer from "./customer.validator";
import * as mongooseId from "./mongoose-id.validator";

export const validators = {
  admin,
  customer,
  mongooseId,
};
