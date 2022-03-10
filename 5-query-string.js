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

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleproduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleproduct) {
    return res.status(404).send(" error 404 ");
  }
  res.json(singleproduct);
});

app.get("/api/vi/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedproducts = [...products];
  if (search) {
    sortedproducts = sortedproducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedproducts = sortedproducts.slice(0, Number(limit));
  }
  if (sortedproducts.length < 1) {
    // res.status(200).send("no product found ");
    return res.status(200).json({ succes: true });
  }
  res.status(200).json(sortedproducts);
});
app.listen(5000, () => {
  console.log("hey i am listening it ");
});
