var express = require("express");

var controller = require("../controller/controller");



var router = new express.Router();

router.get("/articles", controller.index);

router.post("/articles", controller.create);

router.delete("/articles/:id", controller.destroy);

module.exports = router;