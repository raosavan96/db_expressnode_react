const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userScheme = new Schema({
  userName: String,
  password: Number
});



module.exports = model("user", userScheme);
