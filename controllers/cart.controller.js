const Cart = require('../models/Cart.model')
const jwt = require('jsonwebtoken')
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
  cartToken: async (req,res) => {
    try {
      const {user, auto, service, master} = req.body

      const {authorization} = req.headers

      const [type, token] = authorization.split(' ');

      if(type !== "Bearer") {
        return res.status(400).json('Неверный тип покена')
      }

        const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY)

        const cart = await Cart.create({
          user: payload.id,
          auto,
          service,
          master
        })
      return res.json(cart)
      } catch (e) {
        res.status(401).json('Неверный токен')
  }

}
