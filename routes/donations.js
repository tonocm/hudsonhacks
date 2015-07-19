var express = require('express');
var router = express.Router();

var api = require('./api');
var requestHandler = require('./requestHandler');
var matching = require('./matching');

var donations = [];


// Set up a donation
router.post('/', function(req, res) {
  var donation = JSON.parse(req.body);
  checkForReceiverMatch(donation, function (receiver) {
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
  });
});

var getDonations = function() {
	return donations;
}

var checkForReceiverMatch = function (donation, callback) {
	var receivers = requestHandler.tickets;
	for (var i = 0; i < receivers.length; i++) {
		matching.findDistance(donation.location, receivers[i].location, function(distance) {
			if (distance <= 1.0) {
				// check allergy information
				var allergyMatch = false;
				for (var j = 0; j < receivers[i].allergies.length; j++) {
					if (donation.allergies.indexOf(receivers[i].allergies[j]) > -1) {
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
};

module.exports = router;
