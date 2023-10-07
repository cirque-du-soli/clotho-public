const router = require('express').Router();
const sizes = require("../controllers/size-controller.js");

// all including deleted
router.get('/', sizes.findAllInclDeleted);

// get by id including deleted
router.get('/:id([0-9]+)', sizes.findByIdInclDeleted);

// create new
router.post('/', sizes.create);

// update name by id
router.patch('/:id([0-9]+)', sizes.updateById);

// undelete by id
router.patch('/undelete/:id([0-9]+)', sizes.unDeleteById);

// delete by id
router.delete('/:id([0-9]+)', sizes.deleteById);


module.exports = router; 