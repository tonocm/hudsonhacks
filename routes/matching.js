var express = require('express');
var request = require('request');
var router = express.Router();

router.post('/', function(req, res) {
	var locationJson = req.body;
	findLatLong(locationJson.origin, function(lat, lng) {
		res.send(lat + ' ' + lng);
	});
	//var dist = findDistance(locationJson.origin, locationJson.destination);
	//res.send(dist);
});

var findDistance = function (origin, destination) {
	var query_string =  'http://maps.googleapis.com/maps/api/directions/json?' +
						'origin=' + 
	                    encodeURIComponent(origin) + '&' + 
	                    'destination=' + 
	                    encodeURIComponent(destination) + '&' + 
	                    'sensor=false&units=imperial';
	var distance = request(query_string, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var result = JSON.parse(body);
			var dist = result.routes[0].legs[0].distance.text 
			console.log(dist);
			return dist;
		}
	});
	return distance;
};

var findSafeSpot = function (origin, callback) {
	findLatLong(origin, function(lat, lng) {
		var places_query_string = 'https://maps.googleapis.com/maps/api/place/details/json?' +
								  'key=' + // PUT IN SOME API KEY
								  'location=' + lat + ',' + lng + '&'
								  'radius=' + '1610' + '&' +
								  'opennow' + '&' +
								  'type=' + 'convenience_store' + '&';
		request(places_query, function (error, response, body) {
			
		});
	});
	
};

var findLatLong = function (origin, callback) {
	var location_query_string = 'http://maps.googleapis.com/maps/api/geocode/json?' + 
								'address=' + encodeURIComponent(origin) + '&' +
								'sensor=false';
	request(location_query_string, function (error, response, body) {
		var result = JSON.parse(body);
		var latlong = result.results[0].geometry.location;
		return callback(latlong.lat, latlong.lng);
	});
};

module.exports = router;
