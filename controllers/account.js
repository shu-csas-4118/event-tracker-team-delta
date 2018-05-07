const express = require('express');
const Account = require("../models/account");
const router = express.Router();
const mongoose = require('mongoose');
var crypto = require('crypto');

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
                res.render('login', {status: "Account already exists"});
        }
        else{
            if(req.body.password1 == req.body.password2){
                Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
                    if (err) {
                        return res.render('register', { account : account });
                    }
            
                    passport.authenticate('local')(req, res, function () {
                      res.render(login, {status: "please login to your new account"});
                    });
                });
            }
            else {
                res.render('register', {status: "Passwords do not match."});
            }
        }
    });
});

router.get('/login', function (req, res)  {
    res.render('login', {status: "Login here"});
});

router.post('/login', function (req, res, next)  {
    const userN = req.body.username; 
    Account.findOne({username: req.body.username}, function(error, account){
        if(error){
            console.log(error.message);
            res.render('login',  {status: "error logging in"});
         }
        if(account){
            passport.authenticate('local', function(error, account, info){
                if(error || info){
                    console.log("something went wrong");
                    res.render('login',  {status: "error logging in"});
                 }
                 else{
                    req.login(account, function(error){
                        if(error){
                            console.log(error.message);
                            res.render('login',  {status: "error logging in"});
                        }
                        else{
                            res.redirect('/');
                        }
                    });
                 }
            });
        }
        else{
            console.log("no user found");
            res.redirect('/account/register');
        }
    });

});


module.exports = router;

