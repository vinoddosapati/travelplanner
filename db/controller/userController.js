const express = require('express');
const router = express.Router();
const axios = require('axios');
require("../model/user");
//Import the mongoose module
const mongoose = require('mongoose');
const userSchema1 = mongoose.model('user');

/* GET api listing. */
router.post('/userCreate', (req, res) => {
  // console.log("req body"+req.query.firstName);
  // console.log("server user create" + req.originalUrl)
  insertUser(req, res);
});


router.get('/userDelete', (req, res) => {

  res.send('User Delete --- Remove');
});

router.get('/userSearch', (req, res) => {
  console.log("asd "+ req.query.userName);
  console.log("query" + req.originalUrl)
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
  user.save(function(err, guest) {
    if(err) {
      return console.error('Error during document inseert ' + err);
    }else {
      res.json({ status: 200 });
    }
  });
}

module.exports = router;
