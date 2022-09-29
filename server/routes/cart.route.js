// We should always follow DRY principle while formulating our code structure.
// Each we need to import express module in each controller but this can be part of middleware and these redundant imports can be avoided.
// https://codezup.com/create-separate-route-file-node-js-mean-stack/#:~:text=Create%20Employee%20Route%20File%20in%20Node&text=So%20first%20we%20need%20to,an%20argument%20to%20the%20function.
const {Router} = require("express");
const CartModel = require("../model/cart.model");
const OrderModel = require("../model/orders.model");
const ProductModel = require("../model/products.model");


// MVC should always be driven through some factory patterns as per framework
// You can use repository pattern here 
// https://iperiago.medium.com/node-js-app-in-the-real-world-what-they-never-really-tell-you-part-2-of-a-5-part-series-8e9d41d1824
// We should always have our controlle as skinnny as possible.
const cartRoute = Router();
//http://localhost:8080/cart/post?user=5443664636&id=3545345345
// to add item to cart
cartRoute.post("/post",async(req,res)=>{
    let {user,id}=req.query;
    //Whatever is coming in request(req.body.email) you should always validate before processing in your logic.
    let payload = await ProductModel.findOne({_id:id},{_id:0,benefits:0,description:0,info:0})
    console.log("payload",payload);
         payload = {
            payload,
            user
        }
        // let item =
        console.log("item",payload);
        let data = await CartModel.create(payload);
     return res.send({message:"got it ",data});
   
    // let f = await CartModel.find().populate("user");
    
});

// to get the cart items of user based on user id
cartRoute.get("/get/:id", async (req, res) => {
    const user = req.params.id;
   
   let data = await CartModel.find({user:user},{user:0})
    if(data){
       return res.send({message:"cart items",data})
    }
    res.send({message:"empty cart",data})
});

//to remove item from cart
cartRoute.delete("/deleteone/:id", async (req, res) => {
    const id = req.params.id;
    const data = await CartModel.deleteOne({_id:id});
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
    const data = await CartModel.updateOne({_id:id},{$set:{"payload.quantity":quantity}})
    res.send({message:"item updated",data});

})
module.exports = cartRoute