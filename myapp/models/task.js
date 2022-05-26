const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("User", User);
