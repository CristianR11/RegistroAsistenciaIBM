var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegistrantsSchema = new Schema({
  name: String,
  lastname:String,
  email: String,
  position: String,
  company: String,
  phone: String,
  event: String
});

var model = mongoose.model('Registrant', RegistrantsSchema);

module.exports = model ;
