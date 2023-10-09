const router = require('express').Router();
const users = require("../controllers/admin-user-controller.js");

// get all
router.get('/', users.findAll);

// get by id
router.get('/:id([0-9]+)', users.findById);

// create new user
router.post('/', users.create);

// update profile by id
router.put('/:id([0-9]+)', users.updateById);

// undelete by id
router.patch('/undelete/:id([0-9]+)', users.unDeleteById);

// delete by id
router.delete('/:id([0-9]+)', users.deleteById);

module.exports = router; 