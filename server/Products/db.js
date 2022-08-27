
const mongoose = require("mongoose");
require("dotenv").config();
const mongodb_url = process.env.MONGODB_URL;
const connection = mongoose.connect(mongodb_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection