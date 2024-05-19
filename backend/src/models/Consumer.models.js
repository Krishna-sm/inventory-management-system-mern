const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'user',
                required:true
            }   ,    
    name:{
                type:String,
                required:true,
                trim:true
            },
            email:{
                type:String,
                required:true,
                trim:true,
                lower:true
            },
            mobile:{
                type:String,
                required:true,
                trim:true
            },
            dob:{
                type:Date,
                required:true,
                trim:true
            },
            address:{
                type:String,
                required:true,
                trim:true
            },
            isActive:{
                type:Boolean,
                default:true
            }

},{timestamps:true})


const model = mongoose.model("Consumer",Schema)

module.exports = model