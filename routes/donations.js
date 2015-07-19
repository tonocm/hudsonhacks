var express = require('express');
var router = express.Router();

var donations = [];

// Set up a donation
router.post('/', function(req, res) {
  var donation = JSON.parse(req.body);
  donations.push(donation);
  res.send(201);
});

module.exports = router;
