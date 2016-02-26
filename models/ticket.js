'use strict';

var mongoose = require('mongoose')

var ticket = new mongoose.Schema({
  ticket_id: {type: String, required: true, unique: true},
  vehicle_id: {type: mongoose.Schema.Types.ObjectId, required: true},
  created_at: {type: Date, default: Date.now, required: true},
  isPaid: {type: Boolean, default: false, required: true},
  vendor_id: {type: mongoose.Schema.Types.ObjectId, required: true},
  cost: {type: Number, default: 0}
})

module.exports = mongoose.model('Ticket', ticket)
