var express = require('express');
var request = require('request');
var router = express.Router();

router.post('/', function(req, res) {
	var locationJson = req.body;
	findDistance(locationJson.origin, locationJson.destination);
	res.send(200);
});

var findDistance = function (origin, destination) {
	var query_string =  'http://maps.googleapis.com/maps/api/directions/json?' +
						'origin=' + 
	                    encodeURIComponent(origin) + '&' + 
	                    'destination=' + 
	                    encodeURIComponent(destination) + '&' + 
	                    'sensor=false&units=imperial';
	request(query_string, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body)
		}
	});
};



module.exports = router;
