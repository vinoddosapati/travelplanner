const express = require('express');
const router = express.Router();
const axios = require('axios');
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/testdb1';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* GET api listing. */
router.get('/userCreate', (req, res) => {

  res.send('User Created --- Signup');
});

router.get('/userDelete', (req, res) => {

  res.send('User Delete --- Remove');
});

router.get('/userDetails', (req, res) => {

  res.send('User Details --- Get Info');
});

router.get('/userUpdate', (req, res) => {

  res.send('User Update --- Edit profile');
});

module.exports = router;
