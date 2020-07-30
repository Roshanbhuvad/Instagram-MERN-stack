const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");
//EUEpULhlQOcFmXuy
require("./models/user");
mongoose.model("User");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo yeah");
});
mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
