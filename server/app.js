const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

// connect to db
const DB = process.env.DATABASE;
const PORT = process.env.PORT;
mongoose.connect(DB).then(() => {
    console.log("connected");
}).catch((err) => {console.log(err)});

// middleware
const middleware = (req, res, next) => {
    console.log("middleware test");
    next();
}

app.get('/', (req, res)=>{
    res.send(`Hello World From The Express Server`);
});

app.get('/about', middleware ,(req, res)=>{
    console.log("about test");
    res.send(`About Page`);
});

app.get('/contact', (req, res)=>{
    res.send(`Contact page`);
});

app.get('/signin', (req, res)=>{
    res.send(`Sign In page`);
});

app.get('/signup', (req, res)=>{
    res.send(`Sign Up page`);
});

// console.log("hello world............");
app.listen(PORT, ()=>{
    console.log('3000 server is running');
});