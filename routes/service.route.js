const {Router} = require("express")

const {controllerService} = require("../controllers/service.controller")

const router = Router()

router.post('/services', controllerService.postService)
router.get("/services", controllerService.getService)
router.patch("/services/:id", controllerService.patchService)
router.delete("/services/:id", controllerService.deleteService)

module.exports = router