const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  time: { type: Number, required: true },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
});

const Service = mongoose.model("Service", serviceSchema)

module.exports = Service
