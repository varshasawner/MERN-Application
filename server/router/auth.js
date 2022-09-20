const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res)=>{
    res.send(`Hello World From The Server Router js`);
});

router.post('/register', (req, res) => {

    const {userName, email, phone, work, password, cpassword}= req.body;
    if(!userName || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json( {error : "Can not use empty field" });
    }

    User.findOne({email: email}).then((userExiste)=>{
        // checking user exists of not in DB
        if(userExiste){
            return res.status(422).json( {error : "Email Already Exists" });
        }

        // create document for user
        const user = new User( {userName, email, phone, work, password, cpassword} );

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
});

module.exports = router;