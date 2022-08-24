const {Schema,model} = require("mongoose");


const CartSchema = Schema({
    name:String,
    src:String,
    price:Number,
    user:{
       required:true,
       type:Schema.Types.ObjectId,
       ref:"user",
    }
},{
    versionKey:false
}
)

const CartModel = model("cart",CartSchema);

module.exports = CartModel;
   