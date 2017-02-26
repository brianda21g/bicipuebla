var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stations = mongoose.model('stations');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Stations.find({}, function(err,stations){
  	if(err)
  		res.json(err);
  	res.json(stations);
  });
});

module.exports = router;