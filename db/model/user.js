// grab the things we need
const mongoose = require('mongoose');

// create a schema
var userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

mongoose.model('user', userSchema);
