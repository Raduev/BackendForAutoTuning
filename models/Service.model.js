const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  time: { type: Number, required: true },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  img: {type: String, required: true},
  name: {type: String, required: true}
});

const Service = mongoose.model("Service", serviceSchema)

module.exports = Service
