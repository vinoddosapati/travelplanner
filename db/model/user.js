// grab the things we need
const mongoose = require('mongoose');

// create a schema
var user = new mongoose.Schema({
  name: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  usertype: { type: String, required: true},
});

mongoose.model('user', user);
