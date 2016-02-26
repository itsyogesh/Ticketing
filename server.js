'use strict'

var app = require('express')()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

require('dotenv').config()

//var routes = require('./routes')

mongoose.connect(process.env.DB_ENDPOINT)

//Body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(process.env.PORT)
console.log('Pouring on ' + process.env.PORT)
