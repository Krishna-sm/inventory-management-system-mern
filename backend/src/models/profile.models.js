const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
           user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
           },
           refresh_token:{
            type:String,
            default:''
           }
},{timestamps:true})


// 

const model = mongoose.model("profile",Schema)
module.exports= model