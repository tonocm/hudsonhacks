var express = require('express');
var router = express.Router();

var api = require('./routes/api');
var matching = require('./routes/matching');

var donations = [];

// Set up a donation
router.post('/', function(req, res) {
  var donation = JSON.parse(req.body);
  checkForReceiverMatch(donation, function () {
  	// found a match, do something!
  });
  donations.push(donation);
  res.send(201);
});

var getDonations = function() {
	return donations;
}

var checkForReceiverMatch = function (donation, callback) {
	var receivers = api.getReceivers();
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
					return callback();
				}
			}

		});
	}
};

module.exports = router;
