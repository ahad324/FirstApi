require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT | 3000;

const produts_routes = require('./routes/products');

app.use("/api/products", produts_routes);


const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.log(err)
  }
}

start();