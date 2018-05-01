
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
  date:  String,
  time: String,
  owner: String,
  attendees: Array,
  id: Number 
});

var Account = mongoose.model('Account', accountSchema);

function Event() {
};

//prototype creates a class
Event.prototype.getEvents = function () {
    return[];
}

Event.prototype.getEventById = function(id) {
    return {id : 1 };
}

module.exports = Event;