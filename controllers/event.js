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
        owner : req.body.owner, //i want to eventually use passport to get the username of the person that is logged in
        attendees: [], //starts off as 
        price: req.body.price,
        name : req.body.name //i want to count to number of events already in the system and use that + 1
    });

    evt.save(function(error){
        if (error){
        console.log(error.message);
        }
    });

    res.redirect('/event/viewEvents'); 
});

    router.get('/viewEvents', function (req, res) {
        Event.find({}, function(error, events){
            if(error){
                console.log(error.message);
             }
            if(events){
                console.log("something there");
                var newInput = makeUsernames(events);
                res.render('viewEvents', {events: newInput});
             }
            else{
                console.log("nothing there");
            }
        });
    });

    router.post('/view', function (req, res, next){
       
    });

function makeUsernames(events){
    var newArray = [];
    for(i = 0; i < events.length; i++){
        var thing = events[i];
        var newthing = thing.name;
        console.log(newthing);
        newArray.push(newthing);
    }
    return newArray;
}

router.get('/viewEvent/:eName', function(req, res){ 
    console.log(req.params.eName);
    Event.findOne({name: req.params.eName}, function(error, event){
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

router.get('/registerEvent/:price/:eName', function(req, res, next){
    console.log("im here im here!!!");
    res.render('registerEvent', {price: req.params.price, name: req.params.eName});
    });


module.exports = router;