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
  		console.log('Im in here');
  		res.send('No match found');
  	}
  	else {
  		console.log('Found a match');
	  	// found a match, do something!
	  	matching.findSafeSpot(donation.location, function(safeSpotAddress) {
	  		sendToReceiver(receiver.phone, safeSpotAddress, function() {
	  			var result = new Object();
	  			result.name = receiver.name;
	  			result.address = safeSpotAddress;
	  			res.send(JSON.stringify(result));
	  		});
	  	});
  	}
  });
});

// var sendToDonor = function(name, address, res, callback) {
// 	var result = new Object();
// 	  			result.name = receiver.name;
// 	  			result.address = safeSpotAddress;
// 	  			resp.send(JSON.stringify(result));
// }

var sendToReceiver = function (phone, message, callback) {
	var uri = 'http://localhost:3000/api/v1/send?to=' + phone + '&message=' + encodeURIComponent(message);
	request(uri, function (error, response, body) {
		return callback();
	});

}

var checkForReceiverMatch = function (donation, callback) {
	requestsHandler.getTickets(function (receivers) {
		console.log(receivers);
		console.log(receivers.length);
		if (receivers.length > 0) {
			for (var i = 0; i < receivers.length; i++) {
				checkDistanceMatch(donation, receivers[i], function (donor, receiver) {
					var allergyMatch = false;
					console.log(receivers[i]);
					for (var j = 0; j < receiver.allergies.length; j++) {
						if (donor.allergies.length > 0 && donor.allergies.indexOf(receivers[i].allergies[j]) > -1) {
							console.log('Allergy match true: ' + donor.allergies.indexOf(receiver.allergies[j]) > -1);
							allergyMatch = true;
							break;
						}
					}
					console.log(allergyMatch);
					if (allergyMatch == false) {
						return callback(receiver);
					}
				});
				// matching.findDistance(donation.location, receivers[i].location, function(distance) {
				// 	var actual_dist = distance.split(' ')[0];
				// 	if (actual_dist <= 1.0) {
				// 		// check allergy information
				// 		console.log('Passed distance test');
				// 		var allergyMatch = false;
				// 		console.log(receivers[i]);
				// 		for (var j = 0; j < receivers[i].allergies.length; j++) {
				// 			if (donation.allergies.length > 0 && donation.allergies.indexOf(receivers[i].allergies[j]) > -1) {
				// 				console.log('Allergy match true: ' + donation.allergies.indexOf(receivers[i].allergies[j]) > -1);
				// 				allergyMatch = true;
				// 				break;
				// 			}
				// 		}
				// 		console.log(allergyMatch);
				// 		if (allergyMatch == false) {
				// 			return callback(receivers[i]);
				// 		}
				// 	}

				// });
			}
		}
		else {
			return callback("Not found");
		}
	});
};

var checkDistanceMatch = function (donor, receiver, callback) {
	matching.findDistance(donor.location, receiver.location, function(distance) {
		var actual_dist = distance.split(' ')[0];
		if (actual_dist <= 1.0) {
			return callback(donor, receiver);
		}
	})
};

module.exports = router;
