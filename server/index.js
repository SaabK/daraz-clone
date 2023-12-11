const express = require("express");
const cors = require("cors");

const products = require("./routes/products");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", products);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
