const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello")
});

app.listen(process.env.port||8080,()=>{
    console.log("server started");
})