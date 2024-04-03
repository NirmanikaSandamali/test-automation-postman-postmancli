const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "hello world" });
});

app.get("/hi", (req, res) => {
  res.json({ message: "hi" });
});

app.get("/test_Nirmanika", (req, res) => {
  res.json({ message: "hi there" });
});

app.listen("5000");
