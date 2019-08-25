const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Games = new Schema({
  title: {
    type: String
  }
});

module.exports = mongoose.model("Games", Games);
