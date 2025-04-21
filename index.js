const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const routes = require("./routes/index");
const {config} = require("./config/env");
const connectionDb = require("./config/dbConnection");

const app = express();

(async () => {
    try {
        config();
        await connectionDb();
        app.use(cors());
        app.use(bodyParser.json());
        app.use(routes);
    } catch (error) {
        console.log({Error: error.message});
    }
})();

module.exports = app;
app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });