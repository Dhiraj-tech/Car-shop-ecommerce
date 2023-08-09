const Users = require("../models/users")

const registerNewUser = async (req, res) => {
    // if email already exists
  const matched = await Users.exists({email: req.body.email})
  if(matched){
    res.status(409).json({
      msg: 'User Already Exists'
    })
  } else{
    await Users.create(req.body);
      res.status(201).json({
        msg: "User created successfully",
      });
  }
  }
  
  module.exports = {registerNewUser}
  
    
  