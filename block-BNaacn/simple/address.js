var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let addressSchema = new Schema({
    village:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    pin:Number,
    user:Schema.Types.ObjectId
})
module.exports=mongoose.model("User",addressSchema)