const mongoose = require("mongoose");

const schema = mongoose.Schema({
  clanek: { type: String, required: true },
});

module.exports = mongoose.model("Clanek", schema);