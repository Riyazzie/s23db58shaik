const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
shoes_color: String,
shoes_type: String,
shoes_price: Number
})
module.exports = mongoose.model("shoes",
shoesSchema)