
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

eventSchema.methods.addEvent = function(date, time, owner, attd, callback){
  
}
eventSchema.methods.viewEvent = function(id, callback){
  //code for displaying an event?
};

module.exports = Event;