const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello DevOps World 🚀",
    status: "success"
  });
});

module.exports = app;