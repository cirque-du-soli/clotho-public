
const express = require('express');
const router = express.Router();
const listingImageController = require('../controllers/listing-image-controller');

router.post('/upload', listingImageController.uploadPhoto);
router.get('/:id', listingImageController.getPhotos);

module.exports = router;
