const router = require('express').Router();
const orders = require("../controllers/admin-order-controller.js");
const auth = require("../controllers/auth.js");

// get all
router.get('/', orders.findAll);

// get all by buyer
router.get('/buyer/:username', orders.findAllByBuyer); //FIXME username regex

// get by id
router.get('/:id([0-9]+)', orders.findById);

// create new order
router.post('/', orders.create);

// cancel by id
router.delete('/:id([0-9]+)', orders.cancelById);

/*
After implementing auth in front end, remove above routes and uncomment protected routes below
*/

/*

// get all
router.get('/', auth.getToken, auth.getUser, auth.adminOnly, orders.findAll);

// get all by buyer
router.get('/buyer/:username', auth.getToken, auth.getUser, auth.adminOnly, orders.findAllByBuyer); //FIXME username regex

// get by id
router.get('/:id([0-9]+)', auth.getToken, auth.getUser, auth.adminOnly, orders.findById);

// create new order
router.post('/', auth.getToken, auth.getUser, auth.adminOnly, orders.create);

// cancel by id
router.delete('/:id([0-9]+)', auth.getToken, auth.getUser, auth.adminOnly, orders.cancelById);

*/

module.exports = router; 