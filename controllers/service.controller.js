const Service = require("../models/Service.model");

module.exports.controllerService = {
  postService: async (req, res) => {
    try {
      const { time, user, img, name } = req.body;
      const service = await Service.create({
        time: time,
        user: user,
        img: img,
        name: name
      });
      res.json(service);
    } catch (e) {
      res.json(e);
    }
  },
  getService: async (req, res) => {
    try {
      const service = await Service.find();
      res.json(service);
    } catch (e) {
      res.json(e);
    }
  },
  deleteService: async (req, res) => {
    try {
      const service = await Service.findByIdAndRemove(req.params.id);
      res.json(service);
    } catch (e) {
      res.json(e);
    }
  },
  patchService: async (req, res) => {
    try {
      const { time, user, img } = req.body;
      const service = await Service.findByIdAndUpdate(req.params.id, {
        time: time,
        user: user,
        img: img
      });
      res.json(service);
    } catch (e) {
      res.json(e);
    }
  },
};
