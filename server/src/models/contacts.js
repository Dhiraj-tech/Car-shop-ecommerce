const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
  });
  
const Contacts = mongoose.model("Contacts", contactSchema);

module.exports = Contacts

