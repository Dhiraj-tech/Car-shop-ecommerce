const Users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerNewUser = async (req, res) => {
  // if email already exists
  const matched = await Users.exists({ email: req.body.email });
  if (matched) {
    res.status(409).json({
      msg: "User Already Exists",
    });
  } else {
    //encrypt the password
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    await Users.create(req.body);
    res.status(201).json({
      msg: "User created successfully",
    });
  }
};

const loginUser = async (req, res) => {
  // console.log(req.body);
  // req.body -> email, password
  const data = await Users.findOne({ email: req.body.email }).lean();
  if (data) {
    const isMatched = await bcrypt.compare(req.body.password, data.password);
    if (isMatched) {
      const { password, ...userDetails } = data;
      // token generating logic
      const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
      res.status(200).json({
        success: true,
        token,
        userDetails,
      });
    } else {
      res.status(422).json({
        success: false,
        msg: "Incorrect login credentials",
      });
    }
  } else {
    res.status(400).json({
      success: false,
      msg: "No User Found",
    });
  }

  //1. email
  //2. email user -> No: 'no user found'
  //              -> YES: compare {db.hashpass === req.body.password}
  //              // No: 'Incorrect email or password
  //              // Yes: generate a token
  //              // res.json({token,...})
};

module.exports = { registerNewUser, loginUser };
