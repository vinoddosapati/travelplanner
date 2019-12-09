// grab the things we need
const mongoose = require('mongoose');

// create a schema
var request = new mongoose.Schema({
  obj_id: {type: Object, required: true},
  name: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  id: { type: String, required: true },
  usertype: { type: String, required: true},
  pic: { type: String, required: true},
});

mongoose.model('request', request);
