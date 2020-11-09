/*
 * freeCodeCamp APIs and Microservices Certification
 * Project 2: Request Header Parser Microservice
 * Alex Kozlov, 2020
 */

/*
 * The main node.js app script for the Request Header Parser Microservice.
 */

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// mount the asset folder 'public'
app.use(express.static('public'));

// serve 'index.html' at the root path
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

/*
 * The Request Header Parser Microservice API endpoint.
 */
app.get("/api/whoami", function (req, res) {
  console.log(`Received request from IP: '${req.ip}'`);
  console.log(`'Accept-Language': "${req.get('Accept-Language')}"`);
  console.log(`'User-Agent': "${req.get('User-Agent')}"`);

  res.json({
    ipaddress: req.ip,
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  });
});

// listen for requests
require('dotenv').config();
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('App is listening on port: ' + listener.address().port);
});
