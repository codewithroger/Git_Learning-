const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
