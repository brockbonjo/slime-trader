var mongoose = require('mongoose');

//The slimeSchema is used to embed docs into the traders inventory
var slimeSchema = new mongoose.Schema({
  name: {type: String}
}, {
  timestamps: true
});

var traderSchema = new mongoose.Schema({
  name: {type: String},
  firstTime: {type: Boolean, default: true},
  inventory: [slimeSchema],
  googleId: {type: String}
}, {
  timestamps: true
});

module.exports = mongoose.model('Trader', traderSchema);