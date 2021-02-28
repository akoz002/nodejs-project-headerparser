# API Project: Request Header Parser Microservice for freeCodeCamp

### User stories:
1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

### Demo App

A demo app can be found at the link below. At the backend it is implemented in *Node.js* and *Express*. The server source can be found in `server.js`. At the frontend the app contains a *React* component for fetching and displaying the request header info. React source can be found at `views/src/`, and it was built with *Parcel*. Source maps were generated and the original source can be viewed in browser developer tools.

* https://akoz002-nodejs-headerparser.herokuapp.com/

Project template and requirements provided by freeCodeCamp (FCC). Tests and app implementation by Alex Kozlov (akoz002).

#### Example usage:
* https://akoz002-nodejs-headerparser.herokuapp.com/api/whoami

#### Example output:
* `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`

#### Tests

A basic test can be found at `tests/tests.js`. To execute the test in a local environment, first start the server with `npm start`. Then to execute the test run `npm test`. Environment variable `APP_URL` is used by the test to locate the app server. This defaults to a local server at `http://localhost:3000/api/whoami/`. You can also define a local `.env` file, and it will be read by the app.
