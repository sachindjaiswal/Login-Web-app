import express from "express";
import mongoose from "mongoose";
import user from "./models/user.js";
import cors from "cors";

const myApp = express();
myApp.use(cors());
myApp.use(express.static("public"));
myApp.use(express.json());

try {
  const conn = await mongoose.connect("mongodb://localhost:27017/myDatabase");
  console.log("Database Connected");
} catch (error) {
  console.log("error");
}
myApp.get("/", (req, res) => {
  res.send("This is the initial End point of my Server ");
});

myApp.post("/login", async (req, res) => {
  let { username, password } = req.body;
  const existingUser = await user.findOne({ Name: username });
  if (existingUser) {
    console.log("The user already exits");
    return;
  } else {
    const newUser = new user({
      Name: username,
      password: password,
    });
    await newUser.save();
    console.log("User logined sucksexfully");
  }
});

myApp.post("/retriveUser", async (req, res) => {
  const { username } = req.body;

  const userDetail = await user.findOne({ Name: username });

  if (!userDetail) {
    return res.json({ message: "User not found" });
  }

  res.json({
    username: userDetail.Name,
    password: userDetail.password,
  });
});

myApp.listen(3000, () => {
  console.log("The server has started");
});
