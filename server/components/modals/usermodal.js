const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userschema= new Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone :{
        type :String,
        required:true,
        unique:true
    },
    password:{
        type :String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
})
// collection name user,
const usermodal=mongoose.model("user",userschema)

module.exports=usermodal