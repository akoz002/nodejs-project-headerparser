/*
 * A basic test for the Request Header Parser Microservice.
 * Alex Kozlov, 2020
 */

const assert = require('assert');
const fetch = require('node-fetch');
require('dotenv').config();

/*
 * Perform a request and validate the response.
 */

const validateRequest = acceptLanguage => fetch(
  process.env.APP_URL,
  { headers: { 'Accept-Language': acceptLanguage } }
  )
  .then(response => response.json())
  .then(json => {
    // check IP address format
    assert.ok(json.ipaddress);
    assert.match(json.ipaddress, /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);

    // 'Accept-Language' is set in the headers
    assert.ok(json.language);
    assert.strictEqual(json.language, acceptLanguage);

    // 'User-Agent' is 'node-fetch'
    assert.ok(json.software);
    assert.match(json.software, /node-fetch\/1.0/);

    console.log('Successfully validated the following response: ');
    console.log(json);
  });

/*
 * Run a basic test.
 */

console.log(`Running test on app URL: '${process.env.APP_URL}'`);
validateRequest("en-US,en;q=0.5");
