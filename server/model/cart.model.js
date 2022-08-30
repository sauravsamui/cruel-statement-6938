const {Schema,model} = require("mongoose");


const CartSchema = Schema({
    payload:{name:String,
    src:String,
    price:Number,
    quantity:Number,
    },
    user:{required:true,type:String}

},{
    versionKey:false
}
)

const CartModel = model("cart",CartSchema);

module.exports = CartModel;
   