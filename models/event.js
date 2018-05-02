
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  date:  String,
  time: String,
  owner: String,
  attendees: Array,
  id: Number 
});

var Event = mongoose.model('Event', eventSchema);

eventSchema.methods.login = function(date, time, owner, attendees, id, callback){
  
};

//prototype creates a class
Event.prototype.getEvents = function () {
    return[];
}

Event.prototype.getEventById = function(id) {
    return {id : 1 };
}

module.exports = Event;