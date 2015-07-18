var express = require('express');
var router = express.Router();

//var bodyParser = require('body-parser')

/* GET users listing. */
router.post('/', function(req, res) {
  console.log(req.body);
  res.send(200);
});

module.exports = router;
