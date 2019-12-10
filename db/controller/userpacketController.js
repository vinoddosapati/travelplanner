// const express = require('express');
// const router = express.Router();
// const axios = require('axios');
// require("../model/userpacket");
// //Import the mongoose module
// const mongoose = require('mongoose');
// const userpackage = mongoose.model('userpackage');


// router.post('/pckcreate', (req, res) => {
//   console.log('get package by package id' + JSON.stringify(req.originalUrl));
//   createPackage(req, res);
// });

// router.get('/packagebypackid', (req, res) => {
//   console.log('get package by package id' + JSON.stringify(req.originalUrl));
//   getPackageByPackageID(req, res);
// });

// function getPackageByPackageID(req, res) {
//   userpackage.findOne({"_id": req.query.packid}, function(err, packages) {
//     if (err) {throw err;}
//     // object of the user
//     console.log('get package info ' + packages);
//     res.send(packages);

//   });
// }


// function createPackage(req, res) {
//   console.log("trying to insert package" + req.originalUrl);
//   var packageuser = new userpackage();
//   packageuser.packageName = req.query.packageName;
//   packageuser.source = req.query.source;
//   packageuser.uploadedBy = req.query.uploadedby;
//   packageuser.dest = req.query.dest;
//   packageuser.from = req.query.travelstartdate;
//   packageuser.till = req.query.travelreturndate;

//   packageuser.flight.QuoteId = req.query.QuoteId;
//   packageuser.flight.MinPrice= req.query.MinPrice;
//   packageuser.flight.Direct= req.query.Direct;
//   packageuser.flight.OutboundLeg.CarrierIds = req.query.CarrierIds;
//   packageuser.flight.OutboundLeg.OriginId = req.query.OriginId;
//   packageuser.flight.OutboundLeg.DestinationId = req.query.DestinationId;
//   packageuser.flight.OutboundLeg.DepartureDate = req.query.DepartureDate;
//   packageuser.flight.QuoteDateTime = req.query.QuoteDateTime;

//   packageuser.returnflight.QuoteId = req.query.QuoteId2;
//   packageuser.returnflight.MinPrice= req.query.MinPrice2;
//   packageuser.returnflight.Direct= req.query.Direct2;
//   packageuser.returnflight.OutboundLeg.CarrierIds = req.query.CarrierIds2;
//   packageuser.returnflight.OutboundLeg.OriginId = req.query.OriginId2;
//   packageuser.returnflight.OutboundLeg.DestinationId = req.query.DestinationId2;
//   packageuser.returnflight.OutboundLeg.DepartureDate = req.query.DepartureDate2;
//   packageuser.returnflight.QuoteDateTime = req.query.QuoteDateTime;

//   packageuser.hotel.hotelname = req.query.hotelName;
//   packageuser.hotel.rating = req.query.rating;
//   packageuser.hotel.hoteladdress = req.query.address;

//   packageuser.save(function(err, packageuser) {
//     // console.log('package ' + package);
//     if(err) {
//       res.send(packageuser);
//       // console.log('pack1 ' + package);
//       return console.error('Error during document inseert 111' + err);
//     }else {
//       //console.log('pack2 ' + package);
//       //res.json({ status: 200 });
//     }
//     res.send(packageuser);
//   });
// }

// module.exports = router ;
