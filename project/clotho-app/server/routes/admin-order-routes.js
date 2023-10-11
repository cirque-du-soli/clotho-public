const router = require('express').Router();
const orders = require("../controllers/admin-order-controller.js");

// get all available items
router.get('/', orders.findAll);

// get all not deleted by seller
router.get('/buyer/:username', orders.findAllByBuyer); //FIXME username regex

// get by id
router.get('/:id([0-9]+)', orders.findById);

// create new listing
router.post('/', orders.create);

// uncancel by id
router.patch('/:id([0-9]+)', orders.unCancelById);

// cancel by id
router.delete('/:id([0-9]+)', orders.cancelById);


module.exports = router; 