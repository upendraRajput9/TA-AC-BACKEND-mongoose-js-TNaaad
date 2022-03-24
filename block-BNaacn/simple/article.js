var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let articleSchema = new Schema({
    title:String,
    description:String,
    tags:[String],
    createdAt:{type:Date,default: new Date()},
    likes:{type:Number,default:0}
})
module.exports=mongoose.model("User",articleSchema)