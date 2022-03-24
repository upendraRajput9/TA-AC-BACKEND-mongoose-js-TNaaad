var express = require("express")
var mongoose= require("mongoose")


mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log(err ? err : "Connected to database")
})
var app= express();

app.use((req,res)=>{
    res.send(`WELCOME`)
})


app.listen(3000,()=>{
    console.log('server listening on port 4k')
})