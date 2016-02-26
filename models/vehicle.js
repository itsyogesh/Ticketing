'use strict';

var mongoose = require('mongoose')

var vehicle = new mongoose.Schema({
  plate_id: {type: String, required: true},
  name: {type: String},
  type: {type: String},
  user: {type: mongoose.Schema.Types.ObjectId}
})

module.exports = mongoose.model('Vehicle', vehicle)
