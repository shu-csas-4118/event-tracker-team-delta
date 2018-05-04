const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
   username:  String,
   password: String,
   registered: []

 });

accountSchema.methods.login = function(us, pw, callback){
  if(pw == this.password){
     return true;
    }
    else {
      return false;
    }
};

function createAccount(userInfo){

}

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;