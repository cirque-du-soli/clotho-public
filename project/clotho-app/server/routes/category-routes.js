const router = require('express').Router();
const categories = require("../controllers/category-controller.js");

// all including deleted
router.get('/', categories.findAllInclDeleted);

// get by id including deleted
router.get('/:id([0-9]+)', categories.findByIdInclDeleted);

// create new
router.post('/', categories.create);

// update name by id
router.patch('/:id([0-9]+)', categories.updateById);

// undelete by id
router.patch('/undelete/:id([0-9]+)', categories.unDeleteById);

// delete by id
router.delete('/:id([0-9]+)', categories.deleteById);


module.exports = router; 