const express = require("express");
const app = express();
const cors = require("cors");
const phones = require("./phones.json");
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from my first ever server");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("i need data for id :", { id });
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});

app.get("/data", () => {
  res.send("More data coming sooooooooooooooon");
});

app.listen(port, () => {
  console.log(`My first server is running on port: ${port}`);
});
