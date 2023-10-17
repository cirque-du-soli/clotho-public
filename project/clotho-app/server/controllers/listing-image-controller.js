
require('dotenv').config();
const crypto = require('crypto');
// const multer = require('multer');
const sharp = require('sharp');
const { S3Client, ListBucketsCommand, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
const { ListingImage } = require("../models");

// prepare S3 client
const bucketName = process.env.BUCKET_NAME
const region = process.env.BUCKET_REGION
const accessKeyId = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
});


//store file in memory before processing and sending
// exports.storeInMemory = async (req, res, next) => {
//   try {
//     upload.single('image');
//     next();
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Image failed to upload to server" });
//   }
// }

//resize img, buffer, encrypt name, send to S3
exports.processImg = async (req, res) => {
  const file = req.file;

  const fileBuffer = await sharp(file.buffer)
    .resize({ height: 1280, width: 1280, fit: "cover" })
    .toBuffer();

  const fileName = crypto.randomBytes(32).toString('hex');
  const params = {
    Bucket: bucketName,
    Body: fileBuffer,
    Key: fileName,
    ContentType: file.mimetype
  }

  try {
    await s3Client.send(new PutObjectCommand(params));

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Image failed to send to S3" });
  }

  try {
    const imgRecord = await ListingImage.create({
      listingId: req.body.listingId,
      path: fileName,
      priority: req.body.priority
    });

    res.status(201).json({ message: "Successfully added image listing", imgage: imgRecord });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Image record failed to save" });
  }

};

 exports.getAllbyListing = async (req, res, next) => {


  const imgs = await ListingImage.findAll({
    where: {
      listingId: req.params.id
    }
  });

  for (let i in imgs) { 
    imgs[i].url = await getSignedUrl(
      s3Client,
      new GetObjectCommand({
        Bucket: bucketName,
        Key: imgs[i].path
      }),
      { expiresIn: 3600 }
    )
    console.log(imgs[i].url);
    imgs[i] = {url: imgs[i].url, priority: imgs[i].priority};
  }

  res.json(imgs);
};