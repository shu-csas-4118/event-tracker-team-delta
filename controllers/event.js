const express = require('express');
const Event = require("../models/event");
const router = express.Router();
const mongoose = require('mongoose');

router.get('/addEvent', function (req, res) {
    res.render('addEvent', {});
});


router.post('/addEvent', function (req, res, next) {
    const evt = new Event ({
        date : req.body.date,
        time : req.body.time,
        owner : req.body.owner, //i want to eventually use passport to get the username of the person that is logged in
        attendees: [], //starts off as empty
        id : 0 //i want to count to number of events already in the system and use that + 1
    });

    evt.save(function(error){
        if (error){
        console.log(error.message);
        }
    });

    res.redirect('viewEvents', {}); 
});

    router.get('/viewEvents', function (req, res) {
        res.render('viewEvents', {});
    });

    router.post('/viewEvents', function (req, res, next){
        const evt = Event;

    });

   router.post('/viewEvent', function(req, res, next){
        Event.findOne({name: req.body.name}, function(error, event){
           if(error){
               console.log(error.message);
           }
           if(event){
               res.render('viewEvent', {event: event});
           } 
           else{
              console.log("event clicked is not in the database");
              res.render('addEvent', {status: "event does not exist, would you like to create it?"});
           }
     });
    });

module.exports = router;