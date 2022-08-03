const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    userid:{
        type:String
    },
    email:{
        type:String
    },
    producttype:[
        {
            name:{
                type:String
            },
            count:{
                type:Number
            },
            washType:{
                type:String
            },
            price:{
                type:Number
            },
            multiple:{
                type:String
            }
        }
    ],
    items:{
        type:Number
    },
    datetime:{
        type:String
    },
    subtotal:{
        type:Number
    }
})

const orderModel=mongoose.model("orders",orderSchema)

module.exports=orderModel
