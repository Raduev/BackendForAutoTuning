const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  auto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auto"
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service"
  },
  master: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Master"
  }
})

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart
