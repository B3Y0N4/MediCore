const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("mongoose");

require("dotenv").config();

const apiRouter = require("./routes/apiRouter");

const app = express(); // create express app

// MIDDLEWARES
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

// DB CONNECTION
db.mongoose.set("strictQuery", false);
db.mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@main-db.boymjnn.mongodb.net/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });

// ROUTES
app.use("/api/v1", apiRouter);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "/dist", "index.html"));
});

module.exports = app;
