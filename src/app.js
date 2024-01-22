import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORGIN,
    credentials: true,
  })
);

// ktna data handle krna hai uski limit
app.use(
  express.json({
    limit: "16kb",
  })
);

// url se data like /q=osama%20ali => to ye express ko btane ke lie ke urls bh handle krni han tume
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
// koi pdf files ya images aen to unke like ye krdo
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
