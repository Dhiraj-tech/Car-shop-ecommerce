const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productId: Array,
    userId: Number,
  });
  
const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders

