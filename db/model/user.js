// grab the things we need
const mongoose = require('mongoose');

// create a schema
var user = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

mongoose.model('user', user);
