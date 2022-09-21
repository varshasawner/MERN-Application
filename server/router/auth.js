const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res)=>{
    res.send(`Hello World From The Server Router js`);
});

// register route
router.post('/register', (req, res) => {

    const {userName, email, phone, work, password, cpassword}= req.body;
    if(!userName || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json( {error : "Can not use empty field" });
    }else if(password != cpassword){
        return res.status(422).json( {error : "Password & Confirm Password Not Mateched" });
    }else{
        // create document for user
        const user = new User( {userName, email, phone, work, password, cpassword} );
   

    User.findOne({email: email}).then((userExiste)=>{
        // checking user exists of not in DB
        if(userExiste){
            return res.status(422).json( {error : "Email Already Exists" });
        }

        // save user in the collection
        user.save().then(() => {
            res.status(201).json( {message : "User Saved"});
        }).catch((err) => res.status(500).json ({ Error: "Failed to Register" }));
    }).catch(err => {console.log(err)});

    // console.log(name);
    // console.log(email);
    // console.log(password);
    // res.json( {message : req.body});
    // res.send("registration page");
}
});



// login route
router.post('/signin', async (req, res)=>{
    // console.log(req.body);
    // res.json({message : "signin"});
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message : "Plz Fill Both Fields"});
        }

        const userLogin = await User.findOne({email : email});
        // console.log(userLogin);
        
        if(!userLogin){
            res.status(402).json( { error: "User Not Found"});
        }else {
            const passwordCheck = await bcrypt.compare(password, userLogin.password);
            if(!passwordCheck){
                res.status(402).json( { error: "Incorrect Password"});
            }else{
            res.json({message : "User Login Successfull"});
            }
        }

    }catch(err){
        console.log(err);
    }
});

module.exports = router;