const express = require('express');
const Account = require("../models/account");
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register', { });
});


router.post('/register', (req, res, next) => {

});

router.get('/login', (req, res) => {
    res.render('login', { });
});

router.post('/login', (req, res, next) => {

});

module.exports = router;