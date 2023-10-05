const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const testRouter = require("./routes/test-routes");

app.use("/api/test", testRouter);


// {alter: true} // <-- use as arg in .sync() below if needed
db.sequelize.sync({force: true}).then(() => {
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
}) 
.catch((err) => {
    console.error("Unable to connect to database : ", err);
    process.exit(1);
  });