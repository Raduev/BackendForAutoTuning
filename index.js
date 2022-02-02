const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const path = require("path")
require("dotenv").config()

app.use(cors())
app.use("/images", express.static(path.resolve(__dirname, "images")))
app.use(express.json())
app.use(require("./routes/index"))

app.use(express.static(path.resolve(__dirname, 'front-tuning', 'build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front-tuning', 'build', 'index.html'))
})

const connect = async () => {
    await mongoose.connect(process.env.MONGO_SERVER)
    console.log("Соединение успешно установлено")

    app.listen(process.env.PORT, () => {
        console.log(`Server has been started on port http://localhost:${process.env.PORT}`)
    })
}

connect()