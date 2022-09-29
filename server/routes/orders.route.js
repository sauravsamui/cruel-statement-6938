// Follow cart route comments
const {Router} = require("express")

const OrderModel = require("../model/orders.model");



 const orderRoute = Router();

// to get the order items based on user Id
orderRoute.get("/get/:id",async(req,res)=>{
    let user = req.params.id
    let data = await OrderModel.find({user})
    res.send({message:"order items",data});

})

module.exports = orderRoute;