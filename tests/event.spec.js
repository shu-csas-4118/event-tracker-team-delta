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
})

