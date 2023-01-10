var mongoose = require("mongoose");

var userschema = new mongoose.Schema({
  user_name: { type: String, require: true },
});
module.exports = mongoose.model("users", userschema);
