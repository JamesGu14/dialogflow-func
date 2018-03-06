'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

  let city = req.body.result.parameters.city
  let salary = req.body.result.parameters.salary

  let response = `Hi, by living in ${city}, you need to pay $${salary} personal income tax`

  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response }));
  //"speech" is the spoken version of the response, "displayText" is the visual version
});

module.exports = router;