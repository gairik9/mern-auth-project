import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

// Initialize  environment variables.
dotenv.config();

// DB  Connection.
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected To DB.");
  })
  .catch((error) => {
    console.log(error);
  });

// Setup PORT Numbers.
const PORT = process.env.PORT_NUMBER || 3000;

// Setup Server.
const app = express();

// Run The Server.
app.listen(PORT, () => {
  console.log(`Server Running On PORT : ${PORT}.`);
});

// Routing Paths :
app.use("/server/routes", userRoutes);
