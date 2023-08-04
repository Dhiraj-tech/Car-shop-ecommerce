const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: String,
    category: String,
    productPrice: Number,
    productQuantity: Number,
    discount: Number,
    productDescription: String
  });
  
const Products = mongoose.model("Products", productSchema);

module.exports = Products

