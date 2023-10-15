const router = require('express').Router();
const users = require("../controllers/user-controller.js");
const auth = require("../controllers/auth.js");

//get user by id
router.get('/profile', auth.getToken, auth.getUser, users.findById);

// create new user
router.post('/', users.create);

// update profile by id
router.put('/profile', auth.getToken, auth.getUser, users.updateById);

// undelete by id
// router.patch('/undelete/:id([0-9]+)', users.unDeleteById);

// delete by id
router.delete('/:id([0-9]+)', auth.getToken, auth.getUser, users.deleteById);

module.exports = router;