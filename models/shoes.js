const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
shoes_color: String,
shoes_type: String,
shoes_price: {
    type: Number,
    min: [0, 'The shoes price must be greater than or equal to 0'], // Minimum value and custom error message
    max: [50000, 'The shoes price cannot exceed 50000'], // Maximum value and custom error message
    required: [true, 'shoes price is required'] // Ensuring the field is required
    }
})
module.exports = mongoose.model("shoes",
shoesSchema)