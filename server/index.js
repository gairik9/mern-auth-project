import express from "express";

const PORT = 8080;
const app = express();

app.listen(PORT, () => {
  console.log(`Server Running On PORT : ${PORT}.`);
});
