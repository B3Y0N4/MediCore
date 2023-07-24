const express = require("express");
const path = require("path");

const app = express(); // create express app

// MIDDLEWARES
app.use(express.static("client/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// LISTEN
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
