'use strict' // enforces proper sytnax

const Event = require('../models/event')
const expect = require('chai').expect
const EventList = require("../models/eventList")

const event = new Event();

describe('Event module', ()  => {
    describe('"seed"', () => {
        it('should have a getEvents method', () => {
            expect(event.seed).to.be.a('function');
        })
    })


    describe('"addEvent"', (date, time, owner, attendees, id) => {
        before((done) => {
            const db = mongoose.connect('mongodb://localhost/eventtrack');
            EventList.addEvent(event);
            done();
        });

        after((done) =>{
            mongoose.connection.close();
            done();
        });

        it('should  have an addEvent method', ()=> {
            expect(event.getEventById(id)).to.be.an('object');
            const e = event.getEventById(id);
            expect(e.id).to.be(id);
            expect(e.date).to.be(date);
            expect(e.time).to.be(time);
            expect(e.owner).to.be(owner);
            expect(e.attendees).to.be(attendees);
        });
    });
});