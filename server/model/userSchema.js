const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// import mongoose from 'mongoose';
// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required: true
    },
    phone : {
        type : Number,
        required:true
    },
    work : {
        type : String,
        required:true
    },
    password : {
        type: String,
        required: true
    },
    cpassword : {
        type: String,
        required : true
    }
})


// for hashing password
userSchema.pre('save',async function(next) {
    if(this.isModified('password')){
        this .password = await bcrypt.hash(this.password, 12);
        this .cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});


const User  = mongoose.model('USER', userSchema);
module.exports = User;