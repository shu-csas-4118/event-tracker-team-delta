const express = require('express');
const Event = require("../models/event");
const router = express.Router();
const mongoose = require('mongoose');
var db = mongoose.connection;

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

    res.redirect('viewEvents', {}); 
});

    router.get('/viewEvents', function (req, res) {
        res.render('viewEvents', {});
    });

    router.post('/view', function (req, res, next){
        Event.find({}, function(error, events){
            if(error){
                console.log(error.message);
             }
            if(events){
                console.log("something there");
                res.render('viewEvents', {events: events[0]});
             }
            else{
                console.log("nothing there");
            }
        });

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