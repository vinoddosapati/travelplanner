const express = require('express');
const router = express.Router();
const axios = require('axios');
require("../model/package");
//Import the mongoose module
const mongoose = require('mongoose');
const packageSchema = mongoose.model('package');

/* GET api listing. */
router.post('/packageCreate', (req, res) => {
  // console.log("req body"+req.query.firstName);
  // console.log("server user create" + req.originalUrl)
  createPackage(req, res);
});


router.get('/allpackages', (req, res) => {
  getallPackages(req, res);
});

function getallPackages(req, res) {
  console.log("asd "+ JSON.stringify(req.query));
  console.log("query" + req.originalUrl);
  packageSchema.find({}, function(err, packages) {
    if (err) {throw err;}
    // object of the user
    console.log('package info ' + packages);
    res.send(packages);
  });
}

function createPackage(req, res) {
  console.log("trying to insert package" + req.originalUrl);
  var package = new packageSchema();
  package.packageName = req.query.packageName;
  package.source = req.query.source;
  package.dest = req.query.dest;
  package.createdOn = Date.now();
  package.updatedOn = Date.now();
  package.save(function(err, package) {
    console.log('package ' + package);
    if(err) {
      res.send(package);
      console.log('pack1 ' + package);
      return console.error('Error during document inseert ' + err);
    }else {
      console.log('pack2 ' + package);
      //res.json({ status: 200 });
    }
    res.send(package);
  });
}

module.exports = router ;
