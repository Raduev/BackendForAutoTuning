const { Router } = require("express");
const { userController } = require("../controllers/user.controllers");
const autMiddleware = require('../models/midlewares/auth.middleware')

const router = Router();

router.get("/users", userController.getAllUsers);
router.get("/user", autMiddleware, userController.getUserById);
router.post("/users", userController.registerUser);
router.post("/login", userController.login);

module.exports = router;
