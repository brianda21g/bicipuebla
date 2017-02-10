var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
	name: String, 
	lastname: String,
	nickname: String
});

mongoose.model('user', user);
mongoose.connect('mongodb://localhost/bicipuebla');