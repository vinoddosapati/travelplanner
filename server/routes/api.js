const express = require('express');
const router = express.Router();
// const axios = require('axios');

/* GET api listing. */
router.get('/flights', (req, res) => {
console.log('calling flights api ' + JSON.stringify(req.originalUrl));
  const axios = require("axios");
  let datetravel = req.query.flightdate;
  console.log('travel date ' + datetravel.split('T'));
  axios({
    "method":"GET",
    "url":"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/"+req.query.source+"/"+req.query.dest+"/2019-12-10",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key":"9e3498c567msh80e2c93ccdeb182p16276cjsne767228b3b35"
    },"params":{
    "inboundpartialdate":"2019-12-15"
    }
    })
    .then((response)=>{
      console.log(response)
      res.send(response.data);
    })
    .catch((error)=>{
      console.log(error)
    })
});

router.get('/fetchAirports', (req, res) => {
  console.log('calling airports api for ' + JSON.stringify(req.originalUrl));
    const axios = require("axios");

    axios({
      "method":"GET",
      "url":"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key":"9e3498c567msh80e2c93ccdeb182p16276cjsne767228b3b35"
      },"params":{
      "query": req.query.city
      }
      })
      .then((response)=>{
        res.send(response.data);
        // console.log(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  });

router.get('/hotel', (req, res) => {

  res.send('hotel api works');
});

router.get('/hotels', (req, res) => {

  const axios = require("axios");
  API_KEY = 'AIzaSyDcX_ABXVp1M_OkjvJDyAAhGPnJsvsZhXg';
  baseApiUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+'+req.query.city+'+&key='+API_KEY;

  console.log('url ' + JSON.stringify(req.originalUrl));
  console.log('reuest '+JSON.stringify(req.query));
  API = baseApiUrl;
  console.log('url: ' + API);
  //console.log(req.query.name);

  axios.get(`${API}`)
    .then(posts => {
      //console.log(posts.data)
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });


  //res.send('api works');
});

module.exports = router;
