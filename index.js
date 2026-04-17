const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

//Initilize the express app
const app = express();

connectDB();

app.use(express.json());
const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
    console. log(`student services is running on port ${PORT}`);
});
