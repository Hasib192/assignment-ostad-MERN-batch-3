const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const router = require("./route/product");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://127.0.0.1:27017/Products")
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server listening @ ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/v1", router);
