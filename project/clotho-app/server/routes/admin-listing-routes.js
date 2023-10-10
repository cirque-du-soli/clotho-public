const router = require('express').Router();
const listings = require("../controllers/admin-listing-controller.js");

// get all
router.get('/', listings.findAll);

// get all by seller
router.get('/seller/:username', listings.findAllBySeller); //FIXME username regex

// get by id
router.get('/:id([0-9]+)', listings.findById);

// create new listing
router.post('/', listings.create);

// update listing by id
router.put('/:id([0-9]+)', listings.updateById);

// mark sold by id
router.patch('/sold/:id([0-9]+)', listings.markSold);

// reverse sold by id
router.patch('/unsold/:id([0-9]+)', listings.markForSale);

// undelete by id
router.patch('/undelete/:id([0-9]+)', listings.unDeleteById);

// delete by id
router.delete('/:id([0-9]+)', listings.deleteById);

module.exports = router; 