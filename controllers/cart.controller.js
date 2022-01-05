const Cart = require('../models/Cart.model')
const jwt = require('jsonwebtoken')
module.exports.cartController = {

  getCart: async (req, res) => {
    try {
      const cart = await Cart.find()
      res.json(cart)
    }
    catch (e) {
      res.json(e)
    }
  },
  // addCart: async (req, res) => {
  //   try {
  //     await Cart.create({
  //       user: req.body.user,
  //       auto: req.body.auto,
  //       service: req.body.service,
  //       master: req.body.master
  //     })
  //     res.json('Корзина создана')
  //   }
  //   catch (e) {
  //     res.json(e)
  //   }
  // },
  removeCart: async (req, res) => {
    const { id } = req.params

    try {
      const cart = await Cart.findById(id)

      if(req.user.id !== cart.user) {
        return res.status(401).json('Ошибка. Нет доступа')
      }


      if(cart.user.toString() === req.user.id) {
        await cart.remove()
        return res.json('Удалено')
      }
      return res.status(401).json('Ошибка. Нет доступа')
    }
    catch (e) {
      res.status(401).json('Ошибка:' + e.toString())
    }
    },

  patchCart: async (req, res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        user: req.body.user,
        auto: req.body.auto,
        service: req.body.service,
        master: req.body.master
      })
      res.json('Корзина изменена')
    }
    catch (e) {
      res.json(e)
    }
  },
  cartToken: async (req, res) => {
      const { auto, service, master } = req.body

    try {
      const cart = await Cart.create({
        user: req.user.id,
        auto,
        service,
        master
      })
      return res.json(cart)
    }
    catch (e) {
      res.status(401).json('Неверный токен')
    }

  }
}
