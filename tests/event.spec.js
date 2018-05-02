'use strict' // enforces proper sytnax

const Event = require('../models/event')
const expect = require('chai').expect

const event = new Event();

describe('Event module', ()  => {
    describe('"seed"', () => {
        it('should have a getEvents method', () => {
            expect(event.seed).to.be.a('function');
        })
    })

    describe('"getEvents"', () => {
        it('should have a getEvents method', () =>{
            expect(event.getEvents).to.be.a('function');
        })
    
        it('should return an array of events', () => {
            expect(event.getEvents()).to.be.an('array');
        })
    })
    
    describe('"getEventById"', () => {
        it('should have a getEventById method', ()=> {
             expect(event.getEventById()).to.be.an('object');
        })
    
        it('should return an array of events', () => {
            expect(event.getEventById(1)).to.be.an('object');
        })
    })

    describe('"addEvent"', (date, time, owner, attendees, id) => {
        before((done) => {
            const db = mongoose.connect('mongodb://localhost/eventtrack');
            Event.addEvent(event);
            done();
        });

        after((done) =>{
            mongoose.connection.close();
            done();
        });

        it('should  have an addEvent method', ()=> {
            expect(event.getEventById(id)).to.be.an('object');
            const e = event.getEventById(id);
            expect(e.id).to.eql(id);
            expect(e.date).to.eql(date);
            expect(e.time).to.eql(time);
            expect(e.owner).to.eql(owner);
            expect(e.attendees).to.eql([]);
        });
    });
})

