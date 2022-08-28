const {Schema,model} = require("mongoose");


const ProductsSchema = Schema({
    name:String,
    src:String,
    price:Number,
    category:String,
    description:String,
    quantity:Number,
    benefits:String,
    info:String
},{
    versionKey:false
}
)

const ProductModel = model("products",ProductsSchema);

module.exports = ProductModel;