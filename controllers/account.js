const express = require('express');
const Account = require("../models/account");
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register', {us : "", pw: "" });
});


router.post('/register', (req, res, next) => {

});

router.get('/login', (req, res) => {
    res.render('login', { });
});

router.post('/login', (req, res, next) => {
    var user = null;
    Account.findOne({username: req.get("username")}, function(error, account){
        if(error){
            console.log(error.message);
         }
        if(account){
            user = account.login(req.get("username"), req.get("password"), next);}
        else{
            console.log("no user found");
        }
    });

   if(user == null){
        res.render('register', {un : req.get("username"), pw : req.get("password")});
    }
    else{
        res.render('index', { });
    }

});

module.exports = router;