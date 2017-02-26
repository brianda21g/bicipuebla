var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stations = mongoose.model('stations');


/* GET home page. */
router.get('/', function(req, res, next) {
	Stations.find({}, function(err,stations){
		if(err)
			res.json(err);
		res.render('index', { title: 'BiciPuebla Mapa', stations: stations });
	});

});

module.exports = router;
