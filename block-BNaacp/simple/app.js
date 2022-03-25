var express = require("express");
var mongoose = require("mongoose");
var User = require("./models/users")
mongoose.connect("mongodb://localhost/simple",(err)=>{
    console.log(err ? err: "Connected to database")
});

var app = express();

//middelwares

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.send(`WELCOME`)
});
app.post("/users",(req,res)=>{
    User.create(req.body,(err,user)=>{
        
        res.json(req.body)
    })
})

app.get("/users",(req,res)=>{
    User.find({},(err,user)=>{
        console.log(err);
        res.json(user)
    })
})


app.get("/users/:id",(req,res)=>{
    let id = req.params.id;
    User.findById(id,(err,user)=>{
        res.json(user)
    })
})

app.put("/users/:id",(req,res)=>{
    let id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{new:true},(err,updatedUser)=>{
        res.json(updatedUser)
    })
})
app.delete("/users/:id", (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
      if (err) return next(err);
      res.send("user deleted");
    });
  });
app.use((err,req,res,next)=>{
    res.send(err)
})

app.listen(3000,()=>{
    console.log("sever listening on port 3k")
})