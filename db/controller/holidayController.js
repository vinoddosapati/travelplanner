const express = require('express');
const router = express.Router();
const axios = require('axios');
require("../model/holiday");
//Import the mongoose module
const mongoose = require('mongoose');
const holidaySchema = mongoose.model('holiday');

router.post('/addspecial', (req, res) => {
  addspecial(req, res);
});

router.get('/getAllSpecial', (req, res) => {
  getallspecial(req, res);
});

router.delete('/deleteHolidayByID', (req, res) => {
  deleteHolidayById(req, res);
});

function deleteHolidayById(req, res) {
  console.log('delete holiday ' + JSON.stringify(req.originalUrl));
  holidaySchema.remove({"_id": req.query.holidayid}, function(err, holiday) {
    if (err) {throw err;}
    res.send(holiday);
  });
}

function getallspecial(req, res) {
  console.log('all special ' + JSON.stringify(req.originalUrl));
  holidaySchema.find({}, function(err, holiday) {
    if (err) {throw err;}
    res.send(holiday);
  });
}

function addspecial(req, res) {
  console.log('add special package ' + JSON.stringify(req.originalUrl));
  var holidayScheme = new holidaySchema();
  holidayScheme.name = req.query.packageName;
  holidayScheme.from = req.query.travelstartdate;
  holidayScheme.till = req.query.travelreturndate;
  holidayScheme.save(function(err, special) {
    if(err) {
      res.send(special);
      return console.error('Error during document inseert ' + err);
    }else {
    }
    res.send(special);
  });
}

module.exports = router;
