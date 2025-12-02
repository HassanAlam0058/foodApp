const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  // description: { type: String } // optional description field
});

module.exports = mongoose.model("foods", foodSchema, "foods");