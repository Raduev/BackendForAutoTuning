const {Router} = require('express')
const router = Router()
const {controllerAuto} = require('../controllers/Auto.controller')

router.get('/auto', controllerAuto.getAuto)
router.post('/auto', controllerAuto.addAuto)
router.delete('/auto/:id', controllerAuto.deleteAuto)
router.patch('/auto/:id', controllerAuto.patchAouto)

module.exports = router