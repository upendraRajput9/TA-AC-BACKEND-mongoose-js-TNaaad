var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var articleSchema = new Schema({
    title:String,
    description:String,
    tags:String,
    likes:Number,
    author: Schema.Types.ObjectId,
    comments:Number
},{timestamps:true})

module.exports = mongoose.model("Articles",articleSchema)