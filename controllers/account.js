const express = require('express');
const Account = require("../models/account");
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register', {});
});


router.post('/register', (req, res, next) => {
    const act = new Account ({
        username : req.get("username"),
        password : req.get("password")
        
    });

    act.save(function(error){
        if (error){
        console.log(error.message);
        }
    });

    res.redirect('/account/login');
});

router.get('/login', (req, res) => {
    res.render('login', {status: "fuck me up"});
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
        res.redirect('/account/register');
    }
   if(user == "wrong"){
        res.redirect('/account/login');
    }
    else{
        res.redirect('/');
    }

});

module.exports = router;