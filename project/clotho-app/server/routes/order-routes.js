const router = require('express').Router();
const orders = require("../controllers/order-controller.js");


// get all by buyer
router.get('/buyer/:username', orders.findAllByBuyer); //FIXME username regex

// get by id
router.get('/:id([0-9]+)', orders.findById);

// create new order
router.post('/', orders.create);

// cancel by id
router.delete('/:id([0-9]+)', orders.cancelById);


module.exports = router; 