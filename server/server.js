import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOptions.js";
import { logger } from "./middleware/logEvents.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { credentials } from "./middleware/credentials.js";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

// Working with env files
dotenv.config();

// Connect to MongoDB
connectDB();

// Setting our server's port
const port = process.env.PORT || 5500;

// Initializing our server by using express framework
const app = express();

// Custom middleware logger
app.use(logger);

// Handling options credentials check - before CORS!
// and fetching cookies credentials requirement
app.use(credentials);
app.use(cors(corsOptions));

// Parsing incoming requests with JSON payloads
app.use(express.json());

// Middleware for parsing Cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json(`WELCOME TO TASKR REST API`);
});

// Routes

// custom error handler middleware
app.use(errorHandler);

// listen for server
const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is running on ${port}`));
  } catch (error) {
    console.log(error);
  }
};
// listen for db connection
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  start();
});
