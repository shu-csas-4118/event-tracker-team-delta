
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


module.exports = Event;