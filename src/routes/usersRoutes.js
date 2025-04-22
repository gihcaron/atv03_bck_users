const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const apiKeyMiddleware = require("../config/apiKey.js")

router.use(apiKeyMiddleware);

router.get("/", usersController.getAllUsers);
router.post("/", usersController.addUser);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
