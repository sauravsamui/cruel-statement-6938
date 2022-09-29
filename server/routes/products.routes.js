// Follow cart route comments
const {Router} = require("express");
const ProductModel = require("../model/products.model");


const productsRoute = Router();

productsRoute.get("/all",async(req,res)=>{
    let data = await ProductModel.find()

    res.status(200).send({message:"products",data});
});

productsRoute.get("/one/:id",async(req,res)=>{
 let {id} = req.params;
    let data = await ProductModel.findOne({_id:id});
    res.status(200).send({message:"item",data});
});

module.exports= productsRoute;
//https://serene-hollows-15248.herokuapp.com/