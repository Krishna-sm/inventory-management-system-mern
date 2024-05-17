const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true

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
    }
},
{
    timestamps:true
})



const model = mongoose.model("consumer",Schema)

module.exports = model