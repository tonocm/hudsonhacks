var express = require('express');
var router = express.Router();

// Twilio Credentials
var accountSid = 'ACd032ef4f95d49d95d6830d0c80da55dd';
var authToken = '013a87dba50392d3d8bb7ebec60f1ab8';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);



/* GET users listing. */
router.get('/v1/send', function(req, res) {

    if (req.query.to === undefined)
        res.send('Variable "to" not passed');
    else{
        client.sendMessage({
            to: req.query.to, // Any number Twilio can deliver to
            from: "+16466933056", // A number you bought from Twilio and can use for outbound communication
            body: 'testing from my computer :)' // body of the SMS message

        }, function(err, responseData) { //this function is executed when a response is received from Twilio

            if (!err) { // "err" is an error received during the request, if any

                // "responseData" is a JavaScript object containing data received from Twilio.
                // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
                // http://www.twilio.com/docs/api/rest/sending-sms#example-1
                console.log('from: ' + responseData.from); // outputs "+14506667788"
                console.log('to: ' + responseData.to); // outputs "+14506667788"
                console.log('body: ' + responseData.body); // outputs "word to your mother."
            }
        });
    res.send('Success.');
    }
});

router.get('/v1/get', function(req, res){
    var jsonRes = [];
    var last;
    client.messages.list({
    }, jsonRes = function(err, data) {
    	var jsonRes = [];
    	data.messages.forEach(function(message) {
//    	    console.log(message.from);
//    	    console.log(message.body);
    	    jsonRes.push({
    	        'from': message.from,
    	        'body': message.body
    	    });
    	return jsonRes;
    	});
    });
    console.log(jsonRes);
    res.send(jsonRes);
});

module.exports = router;