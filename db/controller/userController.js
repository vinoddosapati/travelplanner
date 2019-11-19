const express = require('express');
const router = express.Router();
const axios = require('axios');
require("../model/user");
//Import the mongoose module
const mongoose = require('mongoose');
const userSchema1 = mongoose.model('user');

/* GET api listing. */
router.post('/userCreate', (req, res) => {
  console.log("req body"+req.query.firstName);
  console.log("server user create" + req.originalUrl)
  insertUser(req, res);
  // res.send('User Created --- Signup');
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

// SignUp
function insertUser(req, res) {
  console.log("trying to insert");
  var user = new userSchema1();
  user.name = req.query.firstName;
  user.email = req.query.Email;
  user.password = req.query.pswd;
  user.save();
}

module.exports = router;
