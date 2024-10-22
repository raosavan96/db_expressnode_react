const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: String,
  password: Number
});



module.exports = model("user", userSchema);
