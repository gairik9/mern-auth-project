import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Initialize  environment variables.
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected To DB.");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = process.env.PORT_NUMBER || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server Running On PORT : ${PORT}.`);
});
