var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
var userSchema = new Schema({
    name:String,
    age:Number,
    password:{min:5,max:15},
    createdAt:{type:Date,default:todays}
})