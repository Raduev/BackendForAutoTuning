const mongoose = require("mongoose");

const masterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

const Master = mongoose.model("Master", masterSchema);

module.exports = Master;
