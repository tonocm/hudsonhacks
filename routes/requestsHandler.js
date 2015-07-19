var express = require('express');
var router = express.Router();
var request = require('request');
var ticket = require('./ticket');
var tickets = [];

router.getTickets = function (callback) {
  return callback(tickets);
};

// Dev purposes. For Prod use:
//var uri = 'http://hoodsonhack.azurewebsites.net/api/v1/get';
var uri = 'http://localhost:3000/api/v1/get';

/* GET users listing. */
router.get('/', function(req, res) {
    request(uri, function(err, resp, body){

        if(!err && resp.statusCode == 200){
            tickets = [];
            var jsonBody = JSON.parse(body);

            var len = jsonBody.length;
            for(var i=0; i < len; i++){
              var singleRequest = jsonBody.pop();
              tickets.push(ticket.render(singleRequest.from, singleRequest.body));
            }
            res.send(tickets);
        }
    }
    );
});

/* GET users listing. */
router.post('/twilio', function(req, res) {
    tickets.push(ticket.render(req.body.From, req.body.Body));
    console.log(tickets);
});

module.exports = router;
