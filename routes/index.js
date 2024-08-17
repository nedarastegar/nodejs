const express = require("express");
const router = express.Router();

const homeRouts = require('./home');
const registerRouts = require('./auth/register');

router.use('/',homeRouts)
router.use('/auth',registerRouts)

module.exports = router