const express = require('express');
const router = express.Router();
const axios = require('axios');
require("../model/request");
//Import the mongoose module
const mongoose = require('mongoose');
const requestSchema = mongoose.model('request');

/* GET api listing. */
router.post('/generate', (req, res) => {
  userRequest(req, res);
});

router.get('/getrequests', (req, res) => {
  getReqUser(req, res);
});

router.delete('/deleteReq', (req, res) => {
  deleteReqUser(req, res);
});

function deleteReqUser(req, res) {
  console.log('delete req user ' + JSON.stringify(req.originalUrl));
  requestSchema.findOneAndDelete({_id: req.query._id}, function(err, user) {
    if (err) {throw err;}
    // object of the user
    // console.log('user info ' + user);
    res.send(user);
  });
}

function getReqUser(req, res) {
  console.log("asd "+ JSON.stringify(req.query));
  console.log("query" + req.originalUrl);
  requestSchema.find({}, function(err, users) {
    if (err) {throw err;}
    // object of the user
    // console.log('user info ' + users);
    res.send(users);
  });
}

function userRequest (req, res) {
  // console.log("requesting for " + JSON.stringify(req.query));
  var user = new requestSchema();
  user.obj_id = req.query._id;
  user.name = req.query.name;
  user.email = req.query.email;
  user.id = req.query.id;
  user.usertype = req.query.usertype;
  user.pic = req.query.pic;
  user.save(function(err, user) {
    // console.log('requested user: ' + user);
    if(err) {
      res.send(user);
      // console.log('user1 ' + user);
      return console.error('Error during document requesting user ' + err);
    } else {
      // console.log('guest2 ' + user);
    }
    res.send(user);
  });
}

module.exports = router;
