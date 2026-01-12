import express from "express"
import mongoose from "mongoose"

const User = new mongoose.Schema({
    Name : String ,
    password:String 
    
})
const user = mongoose.model("User",User)
export default user;