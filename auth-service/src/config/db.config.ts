import { connect } from "mongoose";

/* Database connection configuration */
export const dbConnection = async () => {
  try {
    const DB_URI: any = process.env.DB_URI;
    await connect(DB_URI);

    console.log("Database connection established.");
  } catch (error: any) {
    if (error) {
      console.log("Failed to connect database.");
    }
  }
};
