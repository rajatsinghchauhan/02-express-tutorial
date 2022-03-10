const express = require("express");
const morgan = require("morgan");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
// app.use("/api", logger);
// app.use([authorize, logger]);
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.send("about page ");
  console.log(req.user);
});
app.get("/api/product", [authorize, logger], (req, res) => {
  res.send("product page  ");
});
app.get("/api/product/items", (req, res) => {
  res.send("items ");
});

app.listen(5000, () => {
  console.log("hi i am listening to the app");
});
