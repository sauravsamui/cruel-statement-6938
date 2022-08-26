const express = require("express");
const connection = require("./db");
const cors = require("cors");
const cartRoute = require("./routes/cart.route");
const productsRoute = require("./routes/products.routes");
const  orderRoute  = require("./routes/orders.route");

const app = express();
require("dotenv").config()
const PORT = process.env.PORT

app.use(cors());

app.use(express.json());
app.use(express.text());

app.use("/products",productsRoute);

app.use("/carts",cartRoute);

app.use("/orders",orderRoute);

app.get("/",(req,res)=>{

    res.send("Welcome")
});

app.listen(PORT,async()=>{
    try{
        await connection
        }
        catch{
            console.log("failed to connect to db")
        }
    console.log("server started");
})