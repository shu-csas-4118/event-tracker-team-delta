const express = require('express');
const Account = require("../models/account");
const router = express.Router();
const mongoose = require('mongoose');

router.get('/register', function (req, res)  {
    res.render('register', {});
});


router.post('/register', function (req, res, next) {
    Account.findOne({username: req.body.username}, function(error, account){
        if(error){
            console.log(error.message);
            res.render('register', {});
         }
        if(account){
                res.render('login', {status: "account already exists"});
        }
        else{
            if(req.body.password1 == req.body.password2){
                const act = new Account ({
                    username : req.body.username,
                    password : req.body.password1       
                });
            
                act.save(function(error){
                    if (error){
                    console.log(error.message);
                    }
                });
            
                res.redirect('/account/login');
            }
            else {
                res.render('register', {})
            }
        }
    });
});

router.get('/login', function (req, res)  {
    res.render('login', {status: "fuck me up"});
});

router.post('/login', function (req, res, next)  {
    const userN = req.body.username; 
    Account.findOne({username: userN}, function(error, account){
        if(error){
            console.log(error.message);
            res.render('login',  {status: "error logging in"});
         }
        if(account){
            const user = account.login(req.body.username, req.body.password, next);
            if(user){
                res.redirect('/');
            }
            else{
                res.render('login',  {status: "incorrect username or password"});
            }
        }
        else{
            console.log("no user found");
            res.redirect('/account/register');
        }
    });

});

module.exports = router;