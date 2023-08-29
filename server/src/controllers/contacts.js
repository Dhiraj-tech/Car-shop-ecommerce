const Contacts = require("../models/contacts");

const contactUser = async (req, res) => {
  // if email already exists
  const matched = await Contacts.exists({ email: req.body.email });
  if (matched) {
    res.status(409).json({
      msg: "Message already send",
    });
  } else {
    await Contacts.create(req.body);
    res.status(201).json({
      status: "success",
      msg: "Message sent successfully",
    });
  }
};

module.exports = { contactUser };
