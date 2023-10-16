
const express = require('express');
const router = express.Router();
const listingImageController = require('../controllers/listing-image-controller');

router.post('/listingimages/upload', listingImageController.uploadPhoto);
router.get('/listingimages/:id', listingImageController.getPhotos);

module.exports = router;
