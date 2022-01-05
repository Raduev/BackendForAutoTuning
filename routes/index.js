const {Router} = require("express")
const router = Router()

router.use(require("./Auto.route"))
router.use(require("./cart.route"))
router.use(require("./master.route"))
router.use(require("./service.route"))
router.use(require("./user.routes"))

module.exports = router