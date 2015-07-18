var express = require('express');
var router = express.Router();

// Twilio Credentials
var accountSid = 'ACd032ef4f95d49d95d6830d0c80da55dd';
var authToken = '013a87dba50392d3d8bb7ebec60f1ab8';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);



/* GET users listing. */
router.get('/v1', function(req, res) {
    client.messages.create({
        to:'+16515556677', // Any number Twilio can deliver to
        from: "+16466933056", // A number you bought from Twilio and can use for outbound communication
        body: 'testing from my computer :)' // body of the SMS message
    }, function(err, message) {
        console.log(message.sid);
    });

    res.send('respond with a resource');
});

module.exports = router;
