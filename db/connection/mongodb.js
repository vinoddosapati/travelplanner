const mongoose = require('mongoose');
// mongodb+srv://admin:admin@travelplannercluster-ngkwd.mongodb.net/testdb1?retryWrites=true&w=majority
// mongodb://localhost:27017/testdb1
mongoose.connect('mongodb://localhost:27017/testdb1', {useNewUrlParser: true}, (err) => {
  if(!err) {
    console.log("MongoDB connection success");
  }else{
    console.log("Connection failed for MongoDB" + err)
  }
});
