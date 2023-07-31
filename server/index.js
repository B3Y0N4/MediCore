const express = require("express");
const path = require("path");
const cors = require("cors");

const apiRouter = require("./routes/apiRouter");

const app = express(); // create express app

// MIDDLEWARES
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

// ROUTES
app.use("/api", apiRouter);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "/dist", "index.html"));
});

// LISTEN
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
