'use strict'

var express = require('express');
var router = express.Router();
const intents = require('../intents/')

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  })
})

/* GET home page. */
router.post('/webhook', function(req, res, next) {

  let intent = req.body.result.metadata.intentName
  let response = intents[intent](req.body.result.parameters)

  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response }));
  //"speech" is the spoken version of the response, "displayText" is the visual version
});

module.exports = router;