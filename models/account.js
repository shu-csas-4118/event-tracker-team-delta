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
      return user;
    }
  }
  else{
    return null;
  }
};

function createAccount(userInfo){

}

module.exports = Account;