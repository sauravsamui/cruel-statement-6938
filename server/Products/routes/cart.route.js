const {Router} = require("express");
const CartModel = require("../model/cart.model");
const ProductModel = require("../model/products.model");



const cartRoute = Router();
//http://localhost:8080/cart/items?user=5443664636&id=3545345345
cartRoute.post("/items/:id",async(req,res)=>{
    let {user,id}=req.query;
    let payload = await ProductModel.findbyId({_id:id},{_id:0,benefits:0,description:0,category:0})
     payload = {
        ...payload,
        user
    }
    // let f = await CartModel.find().populate("user");
    let data = await CartModel.insertMany(body);
     res.send({message:"got it ",data});
});

cartRoute.get("/items/:id", async (req, res) => {
    const user = req.params.id
    const data = await CartModel.find({user})
    res.send({message:"cart items",data})
});

cartRoute.delete("/items/:id", async (req, res) => {
    const id = req.params.id;
    const data = await CartModel.deleteMany({$or:[{_id:id},{user:id}]});
    res.send({message:"item deleted"});

});

cartRoute.patch("/items/:id", async (req, res) => {
    const id = req.params.id
     const {quantity} = req.body;
    const data = await CartModel.updateOne({_id:id},{$set:{quantity:quantity}})
    res.send({message:"item updated"});

})
module.exports = cartRoute