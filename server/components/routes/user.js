const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {checkExistingUser,generatePasswordHash} = require("../utility");
const usermodal = require("../modals/usermodal");



const router = express.Router();


// router.get("/",(req,res)=>{
//     usermodal.find({email:eyJhbGciOiJIUzI1NiJ9.cHJhbmF2.C6txS99r17Fgj5orWM3eNkJyboYfB-gLkhVrgRXDqto}).then((data)=>{res.status(200).send(data);})
    
// });
router.get("/register",(req,res)=>{
    usermodal.find().then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err);
    })
});

router.post("/register", async (req, res)=> {
    if(await checkExistingUser(req.body.email)) {
        res.status(400).send("Email exist. Please try with different Email-ID");
    }
    else if (await checkExistingUser(req.body.phone)){
        res.status(401).send("Phone Number exist. Please try with different Phone Number");
    }
    else {
        generatePasswordHash(req.body.password).then((passwordHash)=> {
            usermodal.create({name: req.body.name,
                                email : req.body.email,
                                phone: req.body.phone,
                                password: passwordHash,
                                address: req.body.address,
                                district: req.body.district,
                                state: req.body.state,
                                pincode: req.body.pincode
                            })
                            .then((req)=> { 
                                res.status(200).send(`${req.body.name} added successfully`); 
                            }).catch((err)=> {
                                res.status(403).send(err.message)
            })
        });
    }
    
});

router.post("/login", async (req, res)=> {
    await usermodal.find({$or:[{email: req.body.email},{phone: req.body.phone}]}).then((userData)=> {
        if(userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                if(val) {
                    const authToken = jwt.sign(userData[0].email, process.env.SECRET_KEY);
                    res.status(200).send({authToken});
                } else {
                    res.status(400).send("Invalid Password");
                }
            })
        } else {
            res.status(400).send("Unauthorized user");
        }
    })
});




module.exports = router;