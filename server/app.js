import express from "express";
import "dotenv/config.js";
import { ConnectDB } from "./Database/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
