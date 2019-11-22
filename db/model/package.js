// grab the things we need
const mongoose = require('mongoose');

// create a schema
var package = new mongoose.Schema({
  packageName: {type: String, required: true},
  source: { type: String, required: true, unique: true },
  dest: { type: String, required: true },
  createdOn: { type: Date, default: Date.now},
  updatedOn: { type: Date, default: Date.now}
});

mongoose.model('package', package);
