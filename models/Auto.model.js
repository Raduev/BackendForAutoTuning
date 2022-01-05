const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const AutoSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    coefficient:{
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Auto = mongoose.model("Auto", AutoSchema)
module.exports = Auto