const express=require("express")
const orderModel=require("../modals/ordermodal")
const usermodal =require("../modals/usermodal")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




const router=express.Router()


// const productList={
//                 type:[
//                     {
//                         "name":"Shirts",
//                         "description":"Lorem Ipsum is simply dummy text"
//                     },
//                     {
//                         "name":"T Shirts",
//                         "description":"Lorem Ipsum is simply dummy text"
//                     },{
//                         "name":"Trousers",
//                         "description":"Lorem Ipsum is simply dummy text"
//                     },{
//                         "name":"Jeans",
//                         "description":"Lorem Ipsum is simply dummy text"
//                     },{
//                         "name":"Boxers",
//                         "description":"Lorem Ipsum is simply dummy text"
//                     },{
//                         "name":"Joggers",
//                         "description":"Lorem Ipsum is simply dummy text"
//                     },{
//                         "name":"Others",
//                         "description":"Lorem Ipsum is simply dummy text"
//                     },
//                 ]
// }           



router.post("/create",(req,res)=>{
    if(req.headers.authorization) {
        try {
            let sum=parseInt(0)
            let subtotal=parseInt(0)
            for(let i=0;i<req.body.producttype.length;i++){
                sum+=req.body.producttype[i].quantity
                subtotal+=req.body.producttype[i].total
            }
            const email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            usermodal.find({email:email}).then((data)=>{
                orderModel.create({email:data[0].email,orderid:req.body.orderid,producttype:req.body.producttype,items:sum,datetime:req.body.datetime,subtotal:subtotal})
                .then(()=>{
                    res.status(200).send("successfully order created")
                }).catch((err)=>{
                    console.log(err)
                })
            })
        } catch(err) {
            res.status(403).send("User Not Authorized")
        }
    } else {
        res.status(400).send("Missing Authorization token")
    }
})

// router.get("/show",(req,res)=>{
//     res.status(200).send(productList)
// })
//jdjd

router.get('/history',(req,res)=>{
     if(req.headers.authorization) {
            try {
              const email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
              orderModel.find({email:email}).then((orders)=> {
                  res.status(200).send(orders);
              })
            } catch(err) {
              res.status(403).send("User Not Authorized")
            }
          } else {
              res.status(400).send("Missing Authorization token")
          }
    });

module.exports=router