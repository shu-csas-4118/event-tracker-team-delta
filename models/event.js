
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  date: Date,
  owner: String,
  attendees: Array,
  name: String,
  price: Number
});

var Event = mongoose.model('Event', eventSchema);

eventSchema.methods.addEvent = function(date, time, owner, attd, price, callback){
  
}
eventSchema.methods.viewEvent = function(id, callback){

var listofCollections = db.getCollection('events') //supposedly should show list of events
};



module.exports = Event; 