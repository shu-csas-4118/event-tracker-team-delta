const mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var accountSchema = new Schema({
   username:  String,
   password: String
 });

 var Account = mongoose.model('Account', accountSchema);

function login(username, password){
    
}

function createAccount(userInfo){

}

module.exports = Account;