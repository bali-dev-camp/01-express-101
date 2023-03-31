const express = require("express");
let app = express();

let persons = ["Budi", "Dipadana", "Anto", "Dode", "Theo"]

app.get("/", (req, res) => {
  res.json({ persons: persons });
});

app.listen(3000, () => {
  console.log("Running on localhost:3000");
});