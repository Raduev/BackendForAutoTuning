const Cart = require('../models/Cart.model')
module.exports.cartController = {

  getCart: async (req,res) => {
    try {
      const cart = await Cart.find()
      res.json(cart)
    } catch (e){
      res.json(e)
    }
  },
  addCart: async (req,res) => {
    try {
     await  Cart.create({
       user: req.body.user,
       auto: req.body.auto,
       service: req.body.service,
       master: req.body.master
      })
      res.json('Корзина создана')
    } catch (e) {
      res.json(e)
    }
  },
  removeCart: async (req,res) => {
    try {
      await Cart.findByIdAndRemove(req.params.id)
      res.json('Корзина удалена')
    } catch (e) {
      res.json(e)
    }
  },
  patchCart: async (req,res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        user: req.body.user,
        auto: req.body.auto,
        service: req.body.service,
        master: req.body.master
      })
      res.json('Корзина изменена')
    } catch (e) {
      res.json(e)
    }
  },

}
