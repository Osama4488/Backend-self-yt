import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const app = express();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // console.log(connectionInstance, "connectionInstance");
    console.log(
      `\n MongoDB Connected !!  DB Host: ${connectionInstance.connection.host}`
    );
    app.listen(process.env.PORT, () => {
      console.log(`App Listening on PORT: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;
