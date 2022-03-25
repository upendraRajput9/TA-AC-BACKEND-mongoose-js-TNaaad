var mongoose = require("mongoose");
var User = require("./user");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content:String,
    author: Schema.Types.ObjectId,
    article:String,
},{timestamps:true})