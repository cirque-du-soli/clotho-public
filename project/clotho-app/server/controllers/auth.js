/*
Auth functions for users and admins
*/

const { User } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

/*
 Cache for tokens after logout
 Not complete solution, may want to store in db
 Refresh tokens not yet implemented
 */
var deadTokens = [];
//var deadRefreshTokens = [];


/*
Login
Check credentials and send tokens
*/
exports.login = async (req, res) => {

    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "required" });
    }

    try {

        User.findOne({ where: { email: req.body.email } }).then(user => {

            if (!user) {
                return res.status(400).json("Incorrect email and password combination");
            }

            bcrypt.compare(req.body.password, user.password).then(async (match) => {

                if (!match) {
                    return res.status(400).json("Incorrect email and password combination");
                }

                const token = signToken(user);
                const refreshToken = jwt.sign({user}, process.env.REFRESH_SECRET);
            
                return res.json({token: token, refreshToken: refreshToken});
            });
        });

    } catch (err) {

        console.log(err.message);
        res.status(500).json("something went wrong");
    }
};

/*
Logout
Verify login, cache tokens
*/
exports.logout = (req, res) => {

    jwt.verify(req.token, process.env.SECRET, (err, data) => {

        if (err) {
            console.log(err);
            return res.status(401).json("You are not logged in");

        } else {

            deadTokens.push(req.token);
            console.log("deadtokens " + deadTokens[0]);

        res.status(200).json("Successfully logged out");
        }
    })
};

/*
Retrieve logged in user id and role
*/
exports.getUser = (req, res, next) => {

    if (deadTokens.includes(req.token)) {

        return res.status(401).json("you are not logged in");
    }

    jwt.verify(req.token, process.env.SECRET, (err, data) => {

        if (err) {

            console.log(err);
            return res.status(401).json("you are not logged in");

        } else {

            console.log('current user id : ' + data.user.id);
            req.userId = data.user.id;
            req.isAdmin = data.user.isAdmin;
            next();
        }
    })
};

/*
Authorize resources to admin only
*/
exports.adminOnly = (req, res, next) => {

    if (!req.isAdmin) {
        return res.status(404).json({ message: "Page not found"})
    }

};

/*
Retrieve current token
*/
exports.getToken = (req, res, next) => {

    const header = req.headers['authorization'];

    if (header) {

        const reqToken = header.split(' ')[1];
        req.token = reqToken;

        next();
    } else {
        return res.status(401).json("you are not logged in");
    }
}


/*
exports.refreshToken = (req, res) => {

    const refreshToken = req.body.token;

    if (!refreshToken) {

        return res.status(401);
    };

    if (deadRefreshTokens.includes(refreshToken)) {

        return res.status(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, data) => {

        if (err) {
            return res.status(403);
        }

        const newToken = signToken(data);

        res.send(newToken);

    });
}
*/

/*
Sign user token
*/
function signToken(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '1h' });
}