const {Router} = require("express");
const ProductModel = require("../model/products.model");


const productsRoute = Router();

productsRoute.get("/",async(req,res)=>{
    let data = await ProductModel.find(req.body)
    res.status(200).send({message:"products",data});
});

productsRoute.get("/:id",async(req,res)=>{
 let {id} = req.params;
    let data = await ProductModel.find({_id:id});
    res.status(200).send({message:"item",data});
});

module.exports= productsRoute;