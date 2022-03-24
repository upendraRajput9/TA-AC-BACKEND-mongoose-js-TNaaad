var express = require("express");
var mongoose= require("mongoose");


mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log(err ? err : "Connected to database")
})
var app = express()
app.get("/",(req,res)=>{
    res.send('WELCOME')
})

app.listen(4000,()=>{
    console.log(`sever listening on port 3k`)
})