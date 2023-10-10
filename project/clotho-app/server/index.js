const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//GET only for category, size, gender
const attrRouter = require("./routes/public-attribute-routes");
app.use("/api/attr", attrRouter);

//full CRUD attr for admin only 
const categoryRouter = require("./routes/category-routes");
app.use("/api/admin/categories", categoryRouter);

const genderRouter = require("./routes/gender-routes");
app.use("/api/admin/genders", genderRouter);

const sizeRouter = require("./routes/size-routes");
app.use("/api/admin/sizes", sizeRouter);

const adminUserRouter = require("./routes/admin-user-routes");
app.use("/api/admin/users", adminUserRouter);

const adminListingRouter = require("./routes/admin-listing-routes");
app.use("/api/admin/listings", adminListingRouter);

// *LAST* Server Basic Route
app.get('/', (req, res) => {
    res.send('Greetings, user! Server is running on port 3001.');
});

// {alter: true} // {force: true} // <-- use as arg in .sync() below if needed

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
}) 
.catch((err) => {
    console.error("Unable to connect to database : ", err);
    process.exit(1);
  });