# API Project: Request Header Parser Microservice for freeCodeCamp

### User stories:
1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

### Demo App

A demo app can be found at the link below. It is implemented in Node.js and Express. At the frontend it contains a simple React component for fetching and displaying the request header info. React source can be found at `views/js/`. A basic test can be found at `tests/tests.js`.

* https://akoz002-nodejs-headerparser.herokuapp.com/

Project template and requirements provided by freeCodeCamp (FCC). Tests and app implementation by Alex Kozlov (akoz002).

#### Example usage:
* https://akoz002-nodejs-headerparser.herokuapp.com/api/whoami

#### Example output:
* `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`
