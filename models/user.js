import express from "express"
import mongoose from "mongoose"

const User = new mongoose.Schema({
    Name : {type:String ,
        required : true
    },
    password:{type:String ,
        required : true
    }
})
const user = mongoose.model("User",User)
export default user;