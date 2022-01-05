const { Router } = require("express");
const { userController } = require("../controllers/user.controllers");

const router = Router();

router.get("/users", userController.getAllUsers);
router.post("/users", userController.registerUser);
router.post("/login", userController.login);

module.exports = router;
