const mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var accountSchema = new Schema({
   username:  String,
   password: String
 });

 var Account = mongoose.model('Account', accountSchema);

accountSchema.methods.login = function(username, password, callback){
  var user = this.model('users').findOne({username: this.type }, callback);
  if(!user){
    return null;
  }
  else{
    if(password = user.password){
      return user;
    }
    else{
      return null;
    }
  }
}

function createAccount(userInfo){

}

module.exports = Account;