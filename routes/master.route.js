const {Router} = require("express");

const router = Router();

const {masterController} = require("../controllers/master.controller");

router.get("/master", masterController.getMaster)
router.post("/master", masterController.postMaster)
router.patch("/master/:id", masterController.patchMaster)
router.delete("/master/:id", masterController.deleteMaster)

module.exports = router;