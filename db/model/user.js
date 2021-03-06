// grab the things we need
const mongoose = require('mongoose');

// create a schema
var user = new mongoose.Schema({
  name: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  id: { type: String, required: true },
  usertype: { type: String, required: true},
  pic: { type: String, required: true},
  packages: [{
    packageid: {type: String},
    packagename: {type: String}
  }]
});

mongoose.model('user', user);
