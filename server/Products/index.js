const express = require("express");
const connection = require("./db");
const cartRoute = require("./routes/cart.route");
const productsRoute = require("./routes/products.routes");
const routes = require('./routes/routes');

const app = express();
require("dotenv").config()
const PORT = process.env.PORT

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.use("/products",productsRoute);

app.use("/cart",cartRoute);

app.use("/",routes);

app.get("/",(req,res)=> res.send("Welcome"));

app.listen(PORT,async()=>{
    try{
        await connection
            console.log("server started at http://localhost:8080");
        }
        catch{
            console.log("failed to connect to db")
        }
})


