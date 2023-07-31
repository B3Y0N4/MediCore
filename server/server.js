const app = require("./index");

require("dotenv").config();

// LISTEN
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
