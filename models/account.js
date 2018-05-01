const mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var accountSchema = new Schema({
   username:  String,
   password: String
 });

 var Account = mongoose.model('Account', accountSchema);

accountSchema.methods.login = function(username, password, callback){
  var user = Account.findOne({username: username }, callback);
  if(user){
   if(password = user.password){
     
    }
  }
  else{
    user = null;
  }
  return user;
};

function createAccount(userInfo){

}

module.exports = Account;