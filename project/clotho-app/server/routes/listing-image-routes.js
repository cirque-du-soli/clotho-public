
const express = require('express');
const multer = require('multer');
const router = express.Router();
const auth = require("../controllers/auth.js");
const images = require('../controllers/listing-image-controller');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

 router.post('/', auth.getToken, auth.getUser, upload.single('image'), images.processImg);
// router.get('/:id', listingImageController.getPhotos);

module.exports = router;
