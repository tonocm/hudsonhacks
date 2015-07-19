var express = require('express');
var api = require('./api');
var requestsHandler = require('./requestsHandler');
var matching = require('./matching');
var request = require('request');
var router = express.Router();



var donations = [];


// Set up a donation
router.post('/', function(req, res) {
  var donation = req.body;
  checkForReceiverMatch(donation, function (receiver) {
  	if (receiver === 'Not found') {
  		res.send('No match found');
  	}
  	else {
	  	// found a match, do something!
	  	matching.findSafeSpot(donation.location, function(safeSpotAddress) {
	  		var uri = 'http://localhost:3000/api/v1/get&to=' + receiver.phone + '&message=' + safeSpotAddress;
	  		request(uri, function (error, response, body) {
	  			var resp = new Object();
	  			resp.name = receiver.name;
	  			resp.address = safeSpotAddress;
	  			res.send(JSON.stringify(resp));
	  		});
	  	});
  	}
  });
});

var checkForReceiverMatch = function (donation, callback) {
	requestsHandler.getTickets(function (receivers) {
		if (receivers.length > 0) {
			for (var i = 0; i < receivers.length; i++) {
				matching.findDistance(donation.location, receivers[i].location, function(distance) {
					if (distance <= 1.0) {
						// check allergy information
						var allergyMatch = false;
						for (var j = 0; j < receivers[i].allergies.length; j++) {
							if (donation.allergies.length > 0 && donation.allergies.indexOf(receivers[i].allergies[j]) > -1) {
								allergyMatch = true;
								break;
							}
						}
						if (allergyMatch == false) {
							return callback(receivers[i]);
						}
					}

				});
			}
		}
		callback("Not found");
	});
};

module.exports = router;
