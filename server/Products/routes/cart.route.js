const {Router} = require("express");
const CartModel = require("../model/cart.model");
const ProductModel = require("../model/products.model");



const cartRoute = Router();
//http://localhost:8080/cart/items?user=5443664636&id=3545345345
cartRoute.post("/items",async(req,res)=>{
    let {user,id}=req.query;
    let payload = await ProductModel.findbyId({_id:id},{_id:0})
     payload = {
        ...req.body,
        user
    }
    // let f = await CartModel.find().populate("user");
    let data = await CartModel.create(payload);
     res.send({message:"got it ",data});
});

cartRoute.get("/items/:id", async (req, res) => {
    const user = req.params.id
    //console.log(user);
    const data = await CartModel.find({user})
    res.send({message:"cart items",data})
    // res.send("hii")
});

cartRoute.delete("/items/:id", async (req, res) => {
    const user = req.params.id
    //console.log(user);
    const data = await CartModel.find({user})
    res.send({message:"cart items",data})
    // res.send("hii")
});

module.exports = cartRoute