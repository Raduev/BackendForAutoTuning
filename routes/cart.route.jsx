const {cartController} = require('../controllers/cart.controller')
const {Router} = require('express')

const router = Router()


router.get('/cart/:id', cartController.getCart)
router.post('/cart', cartController.addCart)
router.delete('/cart/:id', cartController.removeCart)
router.patch('/cart/:id', cartController.patchCart)


module.exports = router;
