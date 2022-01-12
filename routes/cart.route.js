const {cartController} = require('../controllers/cart.controller')
const {Router} = require('express')
const autMiddleware = require('../models/midlewares/auth.middleware')
const router = Router()


router.get('/cart',autMiddleware, cartController.getCart)
// router.post('/cart',autMiddleware, cartController.addCart)
router.delete('/cart/:id',autMiddleware, cartController.removeCart)
router.patch('/cart/:id',autMiddleware, cartController.patchCart)
router.post('/cartToken',autMiddleware, cartController.cartToken)

module.exports = router;
