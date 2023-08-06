const Products = require("../models/products")

const addNewProducts = async (req, res) => {
    // console.log(req.body)
    await Products.create(req.body);
    res.json({
      msg: "product created",
    });
  };

const getAllProducts = async(req,res) => {
  const data = await Products.find()
  if(data){
    res.json({
      productsList:data,
      msg:'success'
    })
  }
}  


  module.exports = {addNewProducts, getAllProducts}

  