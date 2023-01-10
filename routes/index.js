const express = require("express");
const user = require("../models/user");
const router = express.Router();
var bodyParser = require("body-parser");

var users = require("../models/user");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

app.use(
  express.json({
    extended: true,
  })
);

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/userList", async (req, res) => {
  const usersList = await users.find();
  console.log(usersList);
  res.json(usersList);
});

router.post("/", async (req, res) => {
  const { username } = req.body;
  const User = new user();
  User.user_name = username;
  User.save();
  // console.log(username);
});



module.exports = router;
