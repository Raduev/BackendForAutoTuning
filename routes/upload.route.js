// const {Router} = require("express")
// const fileMiddleware = require("../middleware/file")
// const path = require("path")

// const router = Router()

// router.post("./upload", fileMiddleware.single("avatar"), (req, res) => {
//     try {
//         if(req.file) {
//             res.json(path.extname(file.originalname))
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })

// module.exports = router