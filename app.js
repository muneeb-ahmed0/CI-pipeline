// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello DevOps World 🚀" });
});

// Export app for Supertest
module.exports = app;