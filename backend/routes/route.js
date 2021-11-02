const express = require("express");

const router = express();
const itemController = require("../controller/itemController");
const userController = require("../controller/userController");

//Item routes
router.get("/api/listing", itemController.getItem);
router.post("/api/listing/add", itemController.addItem);

//User routes
router.post("/api/user/register", userController.registerUser);
router.post("/api/user/login", userController.loginUser);

module.exports = router;
