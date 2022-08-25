const {Router} = require("express")

const OrderModel = require("../model/orders.model");



const orderRoute = Router();

orderRoute.post("/:id",async(req,res)=>{
    let user = req.params.id
    let body = req.body
    body = body.reduce((ac,el)=>{
        el = {...el,user}
        ac.push(el);
        return ac;
    },[])
     
    await OrderModel.insertMany(body)
  
     res.send({message:"order items received"});
});

orderRoute.get("/:id",async(req,res)=>{
    let user = req.params.id
    let data = await OrderModel.insertMany({user})
    res.send({message:"order items",data});

})