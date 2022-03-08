const express = require("express");

const path = require("path");
const app = express();
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });
//directly seving in static resource
app.get("*", (req, res) => {
  res.status(404).send("resource not found");
});
app.listen(5000, () => {
  console.log("i am listening dude");
});
