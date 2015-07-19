var express = require('express');
var request = require('request');

exports.findDistance = function (origin, destination, callback) {
	var query_string =  'http://maps.googleapis.com/maps/api/directions/json?' +
						'origin=' + 
	                    encodeURIComponent(origin) + '&' + 
	                    'destination=' + 
	                    encodeURIComponent(destination) + '&' + 
	                    'sensor=false&units=imperial';
	var distance = request(query_string, function (error, response, body) {
		var result = JSON.parse(body);
		if (result.status == 'OK') {
			var dist = result.routes[0].legs[0].distance.text; 
			return callback(dist);
		}
		else {
			return callback(result.status);
		}
	});
};

exports.findSafeSpot = function (origin, callback) {
	findLatLong(origin, function(lat, lng) {
		var places_query_string = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' +
								  'location=' + lat + ',' + lng + '&' + 
								  'radius=' + '1610' + '&' +
								  'opennow' + '&' +
								  'types=' + 'convenience_store' + '&' + 
								  'key=' + 'AIzaSyCNl8G6rbctAVLMwrRlyTAfrfzSb6Uq57E';
		request(places_query_string, function (error, response, body) {
			var result = JSON.parse(body);
			if (result.status == 'OK') {
				var address = result.results[0].vicinity;
				return callback(address);
			}
			else {
				return callback(result.status);
			}
		});
	});
	
};

var findLatLong = function (origin, callback) {
	var location_query_string = 'http://maps.googleapis.com/maps/api/geocode/json?' + 
								'address=' + encodeURIComponent(origin) + '&' +
								'sensor=false';
	request(location_query_string, function (error, response, body) {
		var result = JSON.parse(body);
		if (result.status == 'OK') {
			var latlong = result.results[0].geometry.location;
			return callback(latlong.lat, latlong.lng);
		} 
		else {
			return callback(result.status, error);
		}
		
	});
};
