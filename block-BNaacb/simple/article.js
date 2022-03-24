var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    date:Number,
title:String,
author:String
})