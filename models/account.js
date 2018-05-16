/*import { Exception } from 'handlebars';*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const accountSchema = new Schema({
   username:  String,
   myEvents: []

 });

 accountSchema.plugin(passportLocalMongoose);

/*accountSchema.methods.login = function(us, pw, callback){
  if(pw == this.password){
     return true;
    }
    else {
      return false;
    }
};

function createAccount(userInfo){
  account = new Account;
  username = username;
  password = password;
  try{
    {
      throw Exception{
        return null;
      }
    }
    return account
  }
};*/

var Account = mongoose.model('Account', accountSchema);


module.exports = Account;