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

router.put('/updateUserID', (req, res) => {

  updatePackageUserID(req, res);
});

router.get('/allpackages', (req, res) => {
  getallPackages(req, res);
});

router.get('/getBooked', (req, res) => {
  getBookedPackages(req, res);
});

router.get('/getCreated', (req, res) => {
  getCreatedPackages(req, res);
});

router.delete('/deletebyid', (req, res) => {
  console.log('delete package ' + JSON.stringify(req.originalUrl));
  deletePackageByID(req, res);
});

function deletePackageByID(req, res) {
  packageSchema.deleteOne({"_id": req.query.packid}, function(err, packages) {
    if (err) {throw err;}
    // object of the user
    console.log('deleted package info ' + packages);
    res.send(packages);

  });
}

function getCreatedPackages(req, res) {
  console.log('created url : ' + JSON.stringify(req.query.originalUrl));
  packageSchema.find({"uploadedBy": req.query.userid}, function(err, packages) {
    if (err) {throw err;}
    // object of the user
    // console.log('package info ' + packages);
    res.send(packages);

  });
}


function getBookedPackages(req, res) {
  console.log('booked url : ' + JSON.stringify(req.query.originalUrl));
  packageSchema.find({"bookings.userid": req.query.userid}, function(err, packages) {
    if (err) {throw err;}
    // object of the user
    // console.log('package info ' + packages);
    res.send(packages);

  });
}

function updatePackageUserID(req, res) {
  console.log('id ' + JSON.stringify(req.originalUrl));
  var userinfo = {userid: req.query._id, username: req.query.name, useremail: req.query.email};
  packageSchema.findOneAndUpdate({_id:req.query.packageid}, {$push: {bookings: userinfo}}, function(err, packages) {
    if (err) {throw err;}
    // object of the user
    // console.log('package info ' + packages);
    res.send(packages);

  });
}

function getallPackages(req, res) {
  // console.log("asd "+ JSON.stringify(req.query));
  // console.log("query" + req.originalUrl);
  packageSchema.find({}, function(err, packages) {
    if (err) {throw err;}
    // object of the user
    // console.log('package info ' + packages);
    res.send(packages);
  });
}

function createPackage(req, res) {
  console.log("trying to insert package" + req.originalUrl);
  var package = new packageSchema();
  package.packageName = req.query.packageName;
  package.source = req.query.source;
  package.uploadedBy = req.query.uploadedby;
  package.dest = req.query.dest;
  package.createdOn = Date.now();
  package.updatedOn = Date.now();

  package.flight.QuoteId = req.query.QuoteId;
  package.flight.MinPrice= req.query.MinPrice;
  package.flight.Direct= req.query.Direct;
  package.flight.OutboundLeg.CarrierIds = req.query.CarrierIds;
  package.flight.OutboundLeg.OriginId = req.query.OriginId;
  package.flight.OutboundLeg.DestinationId = req.query.DestinationId;
  package.flight.OutboundLeg.DepartureDate = req.query.DepartureDate;
  package.flight.QuoteDateTime = req.query.QuoteDateTime;

  package.returnflight.QuoteId = req.query.QuoteId2;
  package.returnflight.MinPrice= req.query.MinPrice2;
  package.returnflight.Direct= req.query.Direct2;
  package.returnflight.OutboundLeg.CarrierIds = req.query.CarrierIds2;
  package.returnflight.OutboundLeg.OriginId = req.query.OriginId2;
  package.returnflight.OutboundLeg.DestinationId = req.query.DestinationId2;
  package.returnflight.OutboundLeg.DepartureDate = req.query.DepartureDate2;
  package.returnflight.QuoteDateTime = req.query.QuoteDateTime;

  package.hotel.hotelname = req.query.hotelName;
  package.hotel.rating = req.query.rating;
  package.hotel.hoteladdress = req.query.address;

  package.save(function(err, package) {
    // console.log('package ' + package);
    if(err) {
      res.send(package);
      // console.log('pack1 ' + package);
      return console.error('Error during document inseert ' + err);
    }else {
      //console.log('pack2 ' + package);
      //res.json({ status: 200 });
    }
    res.send(package);
  });
}

module.exports = router ;
