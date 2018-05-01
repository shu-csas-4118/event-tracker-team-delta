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
    var user = Account.login(req.get("username"), req.get("password"), next);
    if(user){
        res.render('index', { });
    }
    else{
        res.render('register', {un : req.get("username"), pw : req.get("password")});
    }
});

module.exports = router;