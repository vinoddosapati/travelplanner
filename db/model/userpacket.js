// const mongoose = require('mongoose');

// var userpackage = new mongoose.Schema({
//   packageName: {type: String, required: true, unique: true },
//   uploadedBy: { type: String, required: true },
//   source: { type: String, required: true },
//   dest: { type: String, required: true },
//   from: { type: Date, required: true},
//   till: { type: Date, required: true},
//   flight: {
//     QuoteId: {type: Object, required: true},
//     MinPrice: {type: Object, required: true},
//     Direct: Boolean,
//     OutboundLeg: {
//       CarrierIds: [{ type: String, required: true }],
//       OriginId: {type: String, required: true},
//       DestinationId: {type: String, required: true},
//       DepartureDate: {type: Date}
//     },
//     QuoteDateTime: {type: Date}
//   },
//   returnflight: {
//     QuoteId: {type: Object, required: true},
//     MinPrice: {type: Object, required: true},
//     Direct: Boolean,
//     OutboundLeg: {
//       CarrierIds: [{ type: String, required: true }],
//       OriginId: {type: String, required: true},
//       DestinationId: {type: String, required: true},
//       DepartureDate: {type: Date}
//     },
//     QuoteDateTime: {type: Date}
//   },
//   hotel: {
//     hotelname: {type: Object, required: true},
//     hoteladdress: {type: Object, required: true},
//     rating: {type: Object, required: true},
//   }

// });



// mongoose.model('userpackage', userpackage);
