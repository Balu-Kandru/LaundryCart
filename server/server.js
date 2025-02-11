const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const dotenv = require('dotenv');
const multer = require("multer")();
const userController = require("./components/routes/user");
const orderController=require("./components/routes/order");
const bodyParser = require("body-parser");
const { port } = require("./components/utility");
const app=express();

// parsers
app.use(cors())
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(multer.array());
app.use(cors())

// db connection
mongoose.connect(dbUrl, (res)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});


// base path;
app.get("/",(req,res)=>{
    res.send("backend works");
});


// middleware
app.use("/user",userController);
app.use("/order",orderController)

// listening port
app.listen(port,()=>{
    console.log("server started @ : " +process.env.PORT);
});