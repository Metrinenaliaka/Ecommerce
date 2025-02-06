const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    category: String,
    description: String
});
exports.Product = mongoose.model('products', productSchema);