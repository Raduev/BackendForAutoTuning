const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cd(null, "images/")
    },
    filename(req, file, cb) {
        let extname = path.extname(file.originalname)
        cb(null, Date.now() + extname)
    }
})

const types = ["images/png", "image/jpeg", "image/jpg"]

const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})