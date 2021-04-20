const express = require('express');
const views = express.Router();

views.get('/' , (req, res) =>{
    res.render('index');
});

views.get('/Singin' , (req, res) =>{
    res.render('Singin');
})

views.get('/home/:username' , (req,res) => {
    res.render('home' , {username: req.params.username});
})

views.get('/register', (req, res) =>{
    res.render('register');
})

views.get('/contact', (req, res)=>{
    res.render('contact')
})

views.get('/product' , (req,res) => {
    res.render('product')
})

views.get('/delete', (req,res)=>{
    res.render('delete')
})

views.get('/updateprod', (req,res)=>{
    res.render('updateproduct')
})

module.exports = views;
