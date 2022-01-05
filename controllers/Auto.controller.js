const Auto = require("../models/Auto.model");

module.exports.controllerAuto = {
  getAuto: async (req, res) => {
    try {
      const getAuto = await Auto.find();
      res.json(getAuto);
    } catch (e) {
      res.json(e.message);
    }
  },
  addAuto: async (req, res) => {
    try {
      await Auto.create({
        name: req.body.name,
        coefficient: req.body.coefficient,
        image: req.body.image,
      });
      res.json("Автомобиль добавлен");
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteAuto: async (req, res) => {
    try {
      await Auto.findByIdAndDelete(req.params.id);
      res.json("Автомобиль удален");
    } catch (e) {
      res.json(e.message);
    }
  },
  patchAouto: async (req, res) => {
    try {
      await Auto.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        coefficient: req.body.coefficient,
        image: req.body.image,
      });
      res.json("Автомобиль изменен");
    } catch (e) {
      res.json(e.message);
    }
  },
};
