const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config();
require('./db/conn.js');
// const User = require('./model/userSchema');

app.use(express.json());
// link the router file to make router
app.use(require('./router/auth'));


const PORT = process.env.PORT;

// middleware
const middleware = (req, res, next) => {
    console.log("middleware test............");
    next();
}

// app.get('/', (req, res)=>{
//     res.send(`Hello World From The Express Server`);
// });

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
    console.log(`${PORT} server is running`);
});