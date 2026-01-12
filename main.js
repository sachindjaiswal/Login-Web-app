import express from "express";
import mongoose from "mongoose";
import user  from "./models/user.js"

const myApp = express()

myApp.use(express.json())

try {
    const conn = mongoose.connect("mongodb://localhost:27017/myDatabase")
} catch (error) {
    console.log("error");
}
myApp.get("/",(req,res)=>{
    res.send("This is the initial End point of my Server ")
})

myApp.post("/login",async (req,res)=>{
    let username = req.body.username
    let password = req.body.password

    const newUser = new user({
        Name : username ,
        password : password
    })
    await newUser.save()
    res.send("User logined sucksexfully")
})
myApp.listen(3000,()=>{
    console.log("The server has started");
})