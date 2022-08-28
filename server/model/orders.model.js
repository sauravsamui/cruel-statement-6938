const {Schema,model} = require("mongoose");


const OrderSchema = Schema({
    name:String,
    src:String,
    price:Number,
    quantity:Number,
    user:{
       required:true,
       type:String,
       
    }
},{
    versionKey:false
}
)

const OrderModel = model("orders",OrderSchema);

module.exports = OrderModel;
   