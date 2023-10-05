const { User } = require("../models");


exports.findAll = async (req, res) => {

    try {

        const userList = await User.findAll();
        res.json(userList);

    } catch (err) {

        console.log(err.message);
        res.status(500).json("something went wrong");
    }
};