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

router.put('/userreqUpdate', (req, res) => {
  updaterequser(req, res);
});

router.get('/allusers', (req, res) => {
  getallUser(req, res);
  //res.send('User Delete --- Remove');
});

router.get('/userDelete', (req, res) => {

  res.send('User Delete --- Remove');
});

router.get('/userSearch', (req, res) => {
  getUserInfo(req, res);
  //res.send('User Details --- Get Info');
});

router.get('/userUpdate', (req, res) => {

  res.send('User Update --- Edit profile');
});

function getUserInfo(req, res) {
  // console.log("asd "+ JSON.stringify(req.query));
  // console.log("query" + req.originalUrl);
  userSchema1.findOne({"email":req.query.email,"id":req.query.id}, function(err, user) {
    if (err) {throw err;}
    // object of the user
    // console.log('user info ' + user);
    res.send(user);
  });
}

function getallUser(req, res) {
  console.log("asd "+ JSON.stringify(req.query));
  console.log("query" + req.originalUrl);
  userSchema1.find({}, function(err, users) {
    if (err) {throw err;}
    // object of the user
    // console.log('user info ' + users);
    res.send(users);
  });
}

// SignUp
function insertUser(req, res) {
  console.log("trying to insert");
  var user = new userSchema1();
  user.name = req.query.name;
  user.email = req.query.email;
  user.id = req.query.id;
  user.usertype = 'USER';
  user.pic = req.query.photoUrl;
  user.save(function(err, guest) {
    // console.log('guest ' + guest);
    if(err) {
      res.send(guest);
      // console.log('guest1 ' + guest);
      return console.error('Error during document inseert ' + err);
    }else {
      // console.log('guest2 ' + guest);
      //res.json({ status: 200 });
    }
    res.send(guest);
  });
}

function updaterequser(req, res) {
  console.log('updating user: ' + JSON.stringify(req.originalUrl));
  userSchema1.findOneAndUpdate({_id: req.query.obj_id}, {usertype: "AGENT"}, function(err, user) {
    if (err) {throw err;}
    // object of the user
    // console.log('user info ' + user);
    res.send(user);
  });
}

module.exports = router;
