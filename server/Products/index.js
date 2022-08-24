const express = require("express");
const connection = require("./db");
const cartRoute = require("./routes/cart.route");
const productsRoute = require("./routes/products.routes");

const app = express();
require("dotenv").config()
const PORT = process.env.PORT

app.use(express.json());
app.use(express.text());

app.use("/products",productsRoute);

app.use("/cart",cartRoute);

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