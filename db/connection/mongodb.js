const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testdb1', {useNewUrlParser: true}, (err) => {
  if(!err) {
    console.log("MongoDB connection success");
  }else{
    console.log("Connection failed for MongoDB" + err)
  }
});
