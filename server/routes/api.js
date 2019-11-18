const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET api listing. */
router.get('/flight', (req, res) => {

  res.send('flight api works');
});

router.get('/hotel', (req, res) => {

  res.send('hotel api works');
});

module.exports = router;
