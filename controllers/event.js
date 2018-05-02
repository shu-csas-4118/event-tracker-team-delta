const express = require('express');
const Event = require("../models/event");
const router = express.Router();

router.get('/addEvent', (req, res) => {
    res.render('addEvent', {});
});


router.post('/addEvent', (req, res, next) => {
    const evt = new Event ({
        date : req.get("username"),
        time : req.get("password"),
        owner : req.get("owner"), //i want to eventually use passport to get the username of the person that is logged in
        attendees: [], //starts off as empty
        id : 0 //i want to count to number of events already in the system and use that + 1
    });

    evt.save(function(error){
        if (error){
        console.log(error.message);
        }
    });

    res.redirect('/');
});

module.exports = router;