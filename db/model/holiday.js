// grab the things we need
const mongoose = require('mongoose');

// create a schema
var holiday = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  from: { type: Date, required: true},
  till: { type: Date, required: true},
});

mongoose.model('holiday', holiday);
