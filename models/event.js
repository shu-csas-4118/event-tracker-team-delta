
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  date: Date,
  owner: String,
  attendees: Array,
  name: String
});

var Event = mongoose.model('Event', eventSchema);


module.exports = Event;