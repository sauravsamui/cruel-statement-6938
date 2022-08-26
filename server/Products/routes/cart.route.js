const {Router} = require("express");
const CartModel = require("../model/cart.model");
const ProductModel = require("../model/products.model");



const cartRoute = Router();
//http://localhost:8080/cart/items?user=5443664636&id=3545345345
// to add item to cart
cartRoute.post("/post/:id",async(req,res)=>{
    let {user,id}=req.query;
    let payload = await ProductModel.findbyId({_id:id},{_id:0,benefits:0,description:0,category:0})
     payload = {
        ...payload,
        user
    }
    // let f = await CartModel.find().populate("user");
    let data = await CartModel.create(body);
     res.send({message:"got it ",data});
});

// to get the cart items of user based on user id
cartRoute.get("/get/:id", async (req, res) => {
    const user = req.params.id
    const data = await CartModel.find({user})
    res.send({message:"cart items",data})
});

//to remove item from cart
cartRoute.delete("/deleteone/:id", async (req, res) => {
    const id = req.params.id;
    const data = await CartModel.deleteMany({_id:id});
    res.send({message:"item deleted"});

});

//to remove all the item from cart and add to order collection
cartRoute.delete("/deletemany/:id", async (req, res) => {
    const user = req.params.id;
    let items = await CartModel.find({user},{_id:0})
    await OrderModel.insertMany(items);
    await CartModel.deleteMany({user});
    res.send({message:"all item deleted and added to cart"});

});

// to update the quantity of item 
cartRoute.patch("/patch/:id", async (req, res) => {
    const id = req.params.id
     const {quantity} = req.body;
    const data = await CartModel.updateOne({_id:id},{$set:{quantity:quantity}})
    res.send({message:"item updated"});

})
module.exports = cartRoute