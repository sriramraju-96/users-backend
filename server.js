const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

app.use(
  express.json({
    extended: true,
  })
);

//EJS
app.set("view engine", "ejs");

//dotenv
const dotenv = require("dotenv");
dotenv.config({
  path: "./config/.env",
});

mongoose.connect("mongodb://localhost/Dummy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

//connection check
db.once("open", function () {
  console.log("Connected to MongoDB");
});

//check for db errors
db.on("error", function (err) {
  console.log(err);
});

//indexjs route by default
app.use("/", require("./routes/index"));

//Port Connection
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on :${PORT}`);
});
