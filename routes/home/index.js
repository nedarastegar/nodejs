const express = require("express");
const router = express.Router();

const homeController = require('./../../http/controller/homeController')

router.get('/',homeController.index)

router.post('/',homeController.showform)

module.exports = router


