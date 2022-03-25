var mongoose = require("mongoose");
var Schema= mongoose.Schema;

var userSchema = new Schema({
    name:String,
    email:{type:String,lowercase:true},
    sports:[String]
})

module.exports= mongoose.model('User',userSchema);