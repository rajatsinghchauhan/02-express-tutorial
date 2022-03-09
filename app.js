const express = require("express");

const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home page </h1> <a href='/api/products'> products</a>");
});
app.get("/api/products", (req, res) => {
  const newproducts = products.map((product) => {
    const { id, name, image } = product;
    return {
      id,
      name,
      image,
    };
  });

  res.json(newproducts);
});
app.listen(5000, () => {
  console.log("hey i am listening it ");
});
