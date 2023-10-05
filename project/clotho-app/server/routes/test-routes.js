const router = require('express').Router();
const users = require("../controllers/test-controller.js");

router.get('/', users.findAll);

module.exports = router; 