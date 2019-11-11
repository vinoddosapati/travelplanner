const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET api listing. */
router.get('/search', (req, res) => {
  API_KEY = 'AIzaSyDcX_ABXVp1M_OkjvJDyAAhGPnJsvsZhXg';
  baseApiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&type=restaurant&key=';

  console.log('reuest '+req.query);
  API = baseApiUrl+API_KEY+"&location="+req.query.location;
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
