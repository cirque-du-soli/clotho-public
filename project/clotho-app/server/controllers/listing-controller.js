/*
Listing controller for non-admin users
TODO: auth, search filters
*/

const { Listing } = require("../models");
const { User } = require("../models");
const { Category } = require("../models");
const { Size } = require("../models");
const { Gender } = require("../models");
const { ListingImage } = require("../models");

/* 
Get full list of items excluding sold and deleted
*/
exports.findAll = async (req, res) => {

    try {

        var itemList = await Listing.findAll({
            attributes: ['id', 'title', 'description', 'thumbnail', 'price', 'isSold', 'isDeleted', 'createdAt', 'updatedAt'],
            include: [{
                model: User,
                as: 'Seller',
                attributes: ['username', 'id'],

            },
            {
                model: ListingImage,
                attributes: ['id', 'priority', 'path', 'isDeleted']
            },
            {
                model: Category,
                attributes: ['name', 'id']
            },
            {
                model: Size,
                attributes: ['name', 'id']
            },
            {
                model: Gender,
                attributes: ['name', 'id']
            }],
            where: {
                isDeleted: false,
                isSold: false
            }
        });

        if (!itemList[0]) {
            return res.status(404).json({ message: "No listings found" });
        }

        // format decimal
        for (let i in itemList) {
            itemList[i].price /= 100;
            itemList[i].price = itemList[i].price.toFixed(2);
        }
        res.json(itemList);

    } catch (err) {

        console.log(err.message);
        res.status(500).json({ message: "Something went wrong" });
    }
};

/* 
Get listing by id (include sold, exclude deleted)
*/
exports.findById = async (req, res) => {

    try {

        const listing = await Listing.findByPk(req.params.id,
            {
                attributes: ['id', 'title', 'description', 'thumbnail', 'price', 'isSold', 'isDeleted', 'createdAt', 'updatedAt'],

                include: [{
                    model: User,
                    as: 'Seller',
                    attributes: ['username', 'id'],
                },
                {
                    model: ListingImage,
                    attributes: ['id', 'priority', 'path', 'isDeleted']
                },
                {
                    model: Category,
                    attributes: ['name', 'id']
                },
                {
                    model: Size,
                    attributes: ['name', 'id']
                },
                {
                    model: Gender,
                    attributes: ['name', 'id']
                }],
                where: {
                    isDeleted: false
                }
            });

        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }

        //format decimal
        listing.price /= 100;
        listing.price = listing.price.toFixed(2);
        res.json(listing);

    } catch (err) {

        console.log(err.message);
        res.status(500).json({ message: "Something went wrong" });
    }
};


/* 
Get listings by seller username (include sold, exclude deleted, order by sold)
*/
exports.findAllBySeller = async (req, res) => {

    try {


        var itemList = await Listing.findAll(
            {
                attributes: ['id', 'title', 'description', 'thumbnail', 'price', 'isSold', 'isDeleted', 'createdAt', 'updatedAt'],

                include: [{
                    model: User,
                    as: 'Seller',
                    attributes: [],
                    where: {
                        username: req.params.username
                    }
                },
                {
                    model: ListingImage,
                    attributes: ['id', 'priority', 'path', 'isDeleted']
                },
                {
                    model: Category,
                    attributes: ['name', 'id']
                },
                {
                    model: Size,
                    attributes: ['name', 'id']
                },
                {
                    model: Gender,
                    attributes: ['name', 'id']
                }],
                where: {
                    isDeleted: false
                },
                order: ['isSold']
            }
        );

        if (!itemList[0]) {
            return res.status(404).json({ message: "No listings found by this seller" });
        }

        // format decimal
        for (let i in itemList) {
            itemList[i].price /= 100;
            itemList[i].price = itemList[i].price.toFixed(2);
        }
        res.json(itemList);

    } catch (err) {

        console.log(err.message);
        res.status(500).json({ message: "Something went wrong" });
    }
};


/* 
Create new listing
*/
exports.create = async (req, res) => {

    if (isValidPost(req, res)) {

        try {

            //check foreign keys
            var size = await Size.findByPk(req.body.sizeId);
            if (!size) {
                return res.status(400).json({ message: "Invalid size id" });
            }

            var category = await Category.findByPk(req.body.categoryId);
            if (!category) {
                return res.status(400).json({ message: "Invalid category id" });
            }

            var gender = await Gender.findByPk(req.body.genderId);
            if (!gender) {
                return res.status(400).json({ message: "Invalid gender id" });
            }

            var seller = await User.findByPk(req.userId);
            if (!seller || (seller && seller.isDeleted)) {
                return res.status(400).json({ message: "Invalid seller id" });
            }

            //attempt create
            var listing = await Listing.create({
                sellerId: req.userId,
                title: req.body.title,
                description: req.body.description,
                thumbnail: 'placeholder', //TODO imgs
                price: req.body.price * 100,
                sizeId: req.body.sizeId,
                categoryId: req.body.categoryId,
                genderId: req.body.genderId
            });

            res.status(201).json({ message: "Successfully added listing", listing: listing });


        } catch (err) {

            console.log(err.message);
            res.status(500).json({ message: "Something went wrong" });
        }
    }
};

/* 
Edit item listing (excluding deleted and sold)
*/
exports.updateById = async (req, res) => {

    if (isValidPut(req, res)) {

        try {

            // request must include id
            if (!req.params.id) {
                return res.status(400).json({ message: "Listing id cannot be null" });
            }

            //TODO: in non-admin version, verify listing is not sold or deleted + authorize by seller id
            var listing = await Listing.findOne({
                where: {
                    id: req.params.id,
                    sellerId: req.userId,
                    isSold: false,
                    isDeleted: false
                }
            });
            if (!listing) {
                return res.status(400).json({ message: "Invalid listing id" });
            }

            //check foreign keys
            if (req.body.sizeId) {
                var size = await Size.findByPk(req.body.sizeId);
                if (!size) {
                    return res.status(400).json({ message: "Invalid size id" });
                }
            }

            if (req.body.categoryId) {
                var category = await Category.findByPk(req.body.categoryId);
                if (!category) {
                    return res.status(400).json({ message: "Invalid category id" });
                }
            }

            if (req.body.genderId) {
                var gender = await Gender.findByPk(req.body.genderId);
                if (!gender) {
                    return res.status(400).json({ message: "Invalid gender id" });
                }
            }

            listingEdit = await Listing.update(
                {
                    title: req.body.title ? req.body.title : listing.title,
                    description: req.body.description ? req.body.description : listing.description,
                    price: req.body.price ? req.body.price * 100 : listing.price,
                    thumbnail: req.body.thumbnail ? req.body.thumbnail : listing.thumbnail,
                    sizeId: req.body.sizeId ? req.body.sizeId : listing.sizeId,
                    categoryId: req.body.categoryId ? req.body.categoryId : listing.categoryId,
                    genderId: req.body.genderId ? req.body.genderId : listing.genderId
                },
                {
                    where: {
                        id: req.params.id
                    }
                });

            listing = await Listing.findByPk(req.params.id);

            res.status(200).json({ message: "Successful update", listing: listing });

        } catch (err) {

            console.log(err.message);
            res.status(500).json({ message: "Something went wrong" });
        }
    }
};

/* 
Delete listing by id
*/
exports.deleteById = async (req, res) => {

    // request must include id
    if (!req.params.id) {
        return res.status(400).json({ message: "Listing id cannot be null" });
    }
    try {

        // check that user with id exists
        var listing = await Listing.findOne(
            {
                where: {
                    id: req.params.id,
                    sellerId: req.userId,
                    isDeleted: false
                }
            });

        if (!listing) {
            return res.status(400).json({ message: "Listing does not exist or is already deleted" });
        }

        listing = await Listing.update(
            {
                isDeleted: true
            },
            {
                where: {
                    id: req.params.id
                }
            });

        listing = await Listing.findByPk(req.params.id);

        res.status(200).json({ message: "Successful delete", listing: listing });

    } catch (err) {

        console.log(err.message);
        res.status(500).json({ message: "Something went wrong" });
    }
};


function isValidPost(req, res) {

    switch (true) {
        case (!req.body.title):
            res.status(400).json({ message: "Title cannot be null" });
            return false;
        case (req.body.title.length > 50):
            res.status(400).json({ message: "Title cannot exceed 50 characters" });
            return false;
        case (!req.body.description):
            res.status(400).json({ message: "Description cannot be null" });
            return false;
        case (req.body.description.length > 1000):
            res.status(400).json({ message: "Description cannot exceed 1000 characters" });
            return false;
        case (!req.body.price):
            res.status(400).json({ message: "Price cannot be null" });
            return false;
        case (req.body.price != Number(req.body.price).toFixed(2)):
            res.status(400).json({ message: "Price must be in dollars and cents" });
            return false;
        case (req.body.price < 0.01):
            res.status(400).json({ message: "Price must exceed 0" });
            return false;
        case (!req.body.sizeId):
            res.status(400).json({ message: "Size id cannot be null" });
            return false;
        case (req.body.sizeId != Number(req.body.sizeId).toFixed()):
            res.status(400).json({ message: "Size id must be an integer" });
            return false;
        case (!req.body.genderId):
            res.status(400).json({ message: "Gender id cannot be null" });
            return false;
        case (req.body.genderId != Number(req.body.genderId).toFixed()):
            res.status(400).json({ message: "Gender id must be an integer" });
            return false;
        case (!req.body.categoryId):
            res.status(400).json({ message: "Category id cannot be null" });
            return false;
        case (req.body.categoryId != Number(req.body.categoryId).toFixed()):
            res.status(400).json({ message: "Category id must be an integer" });
            return false;
        // case (!req.body.thumbnail): //TODO imgs
        //     return res.status(400).json({ message: "Path to thumbnail image cannot be null" });
        // case (req.body.thumbnail.length > 200): //TODO imgs
        //     return res.status(400).json({ message: "Path to thumbnail image cannot exceed 200 characters" });
        default:
            return true;
    }
}

function isValidPut(req, res) {

    switch (true) {
        case (req.body.title && req.body.title.length > 50):
            res.status(400).json({ message: "Title cannot exceed 50 characters" });
            return false;
        case (req.body.description && req.body.description.length > 1000):
            res.status(400).json({ message: "Description cannot exceed 1000 characters" }); //TODO sanitize
            return false;
        case (req.body.price && req.body.price != Number(req.body.price).toFixed(2)):
            res.status(400).json({ message: "Price must be in dollars and cents" });
            return false;
        case (req.body.price && req.body.price < 0.01):
            res.status(400).json({ message: "Price must exceed 0" });
            return false;
        case (req.body.sizeId && req.body.sizeId != Number(req.body.sizeId).toFixed()):
            res.status(400).json({ message: "Size id must be an integer" });
            return false;
        case (req.body.genderId && req.body.genderId != Number(req.body.genderId).toFixed()):
            res.status(400).json({ message: "Gender id must be an integer" });
            return false;
        case (req.body.categoryId && req.body.categoryId != Number(req.body.categoryId).toFixed()):
            res.status(400).json({ message: "Category id must be an integer" });
            return false;
        case (req.body.thumbnail && req.body.thumbnail.length > 200): //TODO imgs
            return res.status(400).json({ message: "Path to thumbnail image cannot exceed 200 characters" });
        default:
            return true;
    }
}
