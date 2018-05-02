const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventListSchema = new Schema({
  events: Array
});

var Event = mongoose.model('Account', eventListSChema);

accountSchema.methods.login = function(date, time, owner, attendees, id, callback){
  
};