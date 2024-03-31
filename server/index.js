import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

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

app.use(express.json());

// Run The Server.
app.listen(PORT, () => {
  console.log(`Server Running On PORT : ${PORT}.`);
});

// Routing Paths :

// User :
app.use("/api/routes", userRoutes);

// Sign-up :
app.use("/api/auth", authRoutes);

// Middlewares :
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error.";

  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode: statusCode,
  });
});
