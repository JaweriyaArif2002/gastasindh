
const Product = require("../models/divSchema")

exports.createProduct = async (req,res,next) =>{
     const product =  await Product.create(req.body);
     res.status(201).json({
          success:true,
          product
     })
}
//get all products
exports.getallproduucts = (req, res) =>{
     res.status(200).json({message:"route is woking fine"})
 }
