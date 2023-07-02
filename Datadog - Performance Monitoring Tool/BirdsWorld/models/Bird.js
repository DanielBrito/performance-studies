const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const birdSchema = new Schema({
  name: String,
  breed: String,
  age: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bird", birdSchema);
