var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let userSchema = new Schema({
    name:String,
    email:{type:String,lowercase:true,},
    age:{type:Number,default:0},
    password:{minlength:5},
    createdAt:{type:Date,default: new Date()},
    favourites:[String]
},{timestamps:true});

module.exports=mongoose.model("User",userSchema)