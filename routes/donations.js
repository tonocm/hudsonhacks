var express = require('express');
var router = express.Router();

var donations = [];

function Donation(foodName, servings, location, allergies) {
	this.foodName = foodName;
	this.servings = servings;
	this.location = location;
	this.allergies = allergies;
}

// Set up a donation
router.post('/', function(req, res) {
  var donationJson = req.body;
  var newDonation = new Donation(donationJson.foodName, donationJson.servings, donationJson.location, donationJson.allergies);
  donations.push(newDonation);
  res.send(201);
});

module.exports = router;
