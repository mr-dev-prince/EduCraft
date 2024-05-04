import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "reffto" });
    console.log("Database connected!");
  } catch (error) {
    console.log("Database connection Error", error);
  }
};
