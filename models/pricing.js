'use strict';

var mongoose = require('mongoose')

var pricing = new mongoose.Schema({
  vendor_id : {type: mongoose.Schema.Types.ObjectId, required: true},
  initial_cost: {type: Number, required: true},
  initial_time: {type: Number, required: true},
  increment_cost: {type: Number},
  increment_time: {type: Number}
})

module.exports = mongoose.model('Pricing', pricing)
