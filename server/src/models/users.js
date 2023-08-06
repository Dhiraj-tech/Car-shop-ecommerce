const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    email: String,
    password: String,
    address: String,
    phone: Number,
    role: {
      type: String, 
      enum: ['admin','user'], 
      default: 'user'
    },
    favorites: Array,
    cartItems: Array
  });
  
const Users = mongoose.model("Users", userSchema);

module.exports = Users

