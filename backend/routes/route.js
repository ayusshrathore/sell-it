const express = require("express");

const router = express();
const itemController = require("../controller/itemController");

//Item routes
router.get("/api/listing", itemController.getItem);
router.post("/api/listing/add", itemController.addItem);

module.exports = router;
