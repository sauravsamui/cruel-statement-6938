const { Schema, model } = require("mongoose");
const mobileSchema = new Schema({
    mobile: { type: Number }
})
const mobileModel = model('mobile', mobileSchema)
module.exports = mobileModel;
