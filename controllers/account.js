const express = require('express');
const Account = require("../models/account");
const router = express.Router();
const mongoose = require('mongoose');
var crypto = require('crypto');
const passport = require('passport');


router.get('/logout', function(req, res){
    res.render('logout');
});
router.post('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

router.get('/register', function (req, res)  {
   if(req.user){
        res.redirect('/account/logout');
   }
   else{
       res.render('register', {status: "do you want to create an account"})
   }
});


router.post('/register', function (req, res, next) {
    Account.findOne({username: req.body.username}, function(error, account){
        if(error){
            console.log(error.message);
            res.render('register', {});
         }
        if(account){
            console.log("account already exists");
            res.render('login', {status: "Account already exists"});
        }
        else{
            console.log("registering");
            if(req.body.password1 == req.body.password2){
                console.log("passwords match");
                Account.register(new Account({ username : req.body.username, myEvents: [] }), req.body.password1, function(err, account) {
                    if (err) {
                        console.log("registration error");
                        console.log(err.message);
                         res.render('register', { status : err.message });
                    }
                    else{
                        console.log("no error, attempting to register");
                        passport.authenticate('local',  res.redirect('/account/login'));
                    }
                    
                });
            }
            else {
                console.log("passwords didnt match");
                res.render('register', {status: "Passwords do not match."});
            }
        }
    });
});

router.get('/login', function (req, res)  {
    if(req.user){
        res.redirect('/account/logout');
    }
    else{
        res.render('login', {status: "Login here"});
    }
});

router.post('/login', function (req, res, next)  {
    const userN = req.body.username;  
    Account.findOne({username: req.body.username}, function(error, account){
        if(error){
            console.log(error.message);
            res.render('login',  {status: "error logging in"});
         }
        if(account){
            console.log("account found");
            passport.authenticate('local', function(error, account, info){
                if(error){
                    console.log(error.message);
                    return res.render('login',  {status: error.message});
                 }
                 if(info){
                     console.log(info.message);
                     return res.render('login', {status: info.message});
                 }
                 else{
                 console.log("no error authenticating");
                 req.login(account, function(error) {
                       if(error) {
                         console.log(error.message);
                         return res.render('login',  {status: "error logging in"});
                        }
                        else {
                            return res.redirect('/');
                        }
                    });
                }
             })(req, res, next);
        }

        else{
            console.log("no user found");
            res.redirect('/account/register');
        }
    });

});


module.exports = router;

