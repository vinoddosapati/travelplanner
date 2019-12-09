// grab the things we need
const mongoose = require('mongoose');

// var user = new mongoose.Schema({
//   userid: {type: Object},
//   username: {type: String},
//   useremail: {type: String}
// });

// create a schema
var package = new mongoose.Schema({
  packageName: {type: String, required: true, unique: true },
  uploadedBy: { type: String, required: true },
  source: { type: String, required: true },
  dest: { type: String, required: true },
  createdOn: { type: Date, default: Date.now},
  updatedOn: { type: Date, default: Date.now},
  bookings: [{
    userid: {type: Object},
    username: {type: String},
    useremail: {type: String}
  }],
  flight: {
    QuoteId: {type: Object, required: true},
    MinPrice: {type: Object, required: true},
    Direct: Boolean,
    OutboundLeg: {
      CarrierIds: [{ type: String, required: true }],
      OriginId: {type: String, required: true},
      DestinationId: {type: String, required: true},
      DepartureDate: {type: Date}
    },
    QuoteDateTime: {type: Date}
  },
  returnflight: {
    QuoteId: {type: Object, required: true},
    MinPrice: {type: Object, required: true},
    Direct: Boolean,
    OutboundLeg: {
      CarrierIds: [{ type: String, required: true }],
      OriginId: {type: String, required: true},
      DestinationId: {type: String, required: true},
      DepartureDate: {type: Date}
    },
    QuoteDateTime: {type: Date}
  },
  hotel: {
    hotelname: {type: Object, required: true},
    hoteladdress: {type: Object, required: true},
    rating: {type: Object, required: true},
  }

});



mongoose.model('package', package);
