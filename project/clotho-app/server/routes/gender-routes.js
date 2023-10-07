const router = require('express').Router();
const genders = require("../controllers/gender-controller.js");

// all including deleted
router.get('/', genders.findAllInclDeleted);

// get by id including deleted
router.get('/:id([0-9]+)', genders.findByIdInclDeleted);

// create new
router.post('/', genders.create);

// update name by id
router.patch('/:id([0-9]+)', genders.updateById);

// undelete by id
router.patch('/undelete/:id([0-9]+)', genders.unDeleteById);

// delete by id
router.delete('/:id([0-9]+)', genders.deleteById);


module.exports = router; 