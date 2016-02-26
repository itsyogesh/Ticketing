'use strict';

var mongoose = require('mongoose')

//Add location, dynamic pricing, dynamic spots
var vendor = new mongoose.Schema({
  name: {type: String, required: true}
  available_spots: {type: Number, required: true},
  total_spots: {type: Number, required: true},
  pricing: {type: mongoose.Schema.Types.ObjectId, required: true}
})


module.exports = mongoose.model('Vendor', vendor)
