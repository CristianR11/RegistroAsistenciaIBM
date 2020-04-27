var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
  nameP: String,
  email:String,
  name: String,
  date:String,
  hourF: String,
  hourB: String,
  location: String,
  speaker: String,
  status: String,
  image: String,
  description: String
});

var model = mongoose.model('event', EventsSchema);

module.exports = model ;
