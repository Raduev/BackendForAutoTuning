const Master = require("../models/Master.model");

module.exports.masterController = {
  getMaster: async (req, res) => {
    try {
      const getMaster = await Master.find();
      res.json(getMaster);
    } catch (error) {
      res.json(error.message);
    }
  },
  postMaster: async (req, res) => {
    try {
      await Master.create({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
      });
      res.json("Мастер успешно добавлен");
    } catch (error) {
      res.json(error.message);
    }
  },
  patchMaster: async (req, res) => {
    try {
      await Master.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
      });
      res.json("Данные мастера успешно изменены");
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteMaster: async (req, res) => {
    try {
      await Master.findByIdAndRemove(req.params.id);
      res.json("Данные мастера успешно удалены");
    } catch (error) {
      res.json(error.message);
    }
  },
};
