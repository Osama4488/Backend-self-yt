import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(process.env.PORT || 8000, () => {
        console.log(` Server Running on PORT: ${process.env.PORT || 8000}`);
      });
    });
  })
  .catch((err) => console.log(err, "Mongo db connectio failed !!!"));

// this is also the way for connection
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App Listening on PORT: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();
*/
