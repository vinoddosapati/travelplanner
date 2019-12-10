// Get dependencies
require("./db/connection/mongodb");

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Get our API routes
const api = require('./server/routes/api.js');
const user = require('./db/controller/userController');
const package = require('./db/controller/packageController');
const request = require('./db/controller/requestController');
const holiday = require('./db/controller/holidayController');
//const userpackage = require('./db/controller/userpacketController');
// Set our api routes
app.use('/api', api);
app.use('/user', user);
app.use('/package', package);
app.use('/request', request);
app.use('/holiday', holiday);
//app.use('/userpackage', userpackage);
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/travelplanner')));




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/travelplanner/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
