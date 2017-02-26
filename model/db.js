var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
	name: String, 
	lastname: String,
	nickname: String
});
var stations = new Schema({
	latitude: Number, 
	longitude: Number,
	address: String,
	number: Number
});

mongoose.model('stations', stations);
mongoose.model('user', user);

mongoose.connect('mongodb://localhost/bicipuebla');