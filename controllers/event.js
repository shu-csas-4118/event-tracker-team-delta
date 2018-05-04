const express = require('express');
const Event = require("../models/event");
const router = express.Router();

router.get('/addEvent', function (req, res) {
    res.render('addEvent', {});
});


router.post('/addEvent', function (req, res, next) {
    const evt = new Event ({
        date : req.body.date,
        owner : req.body.owner, //i want to eventually use passport to get the username of the person that is logged in
        attendees: [], //starts off as empty
        name : req.body.name //i want to count to number of events already in the system and use that + 1
    });

    evt.save(function(error){
        if (error){
        console.log(error.message);
        }
    });

    res.redirect('viewEvents');
});

module.exports = router;