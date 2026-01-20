const express = require("express");

const app = express();

app.use(express.json());

//prosty endpoint testowy
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;
