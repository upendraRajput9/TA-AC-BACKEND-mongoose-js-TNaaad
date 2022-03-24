var mongoose= require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    title:String,
    description:Number
})

module.exports= mongoose.model('User',userSchema)