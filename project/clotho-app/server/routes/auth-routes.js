const router = require('express').Router();
const auth = require("../controllers/auth.js");

//login
router.post('/', auth.login);

//logout
router.delete('/', auth.getToken, auth.getUser, auth.logout);


module.exports = router; 