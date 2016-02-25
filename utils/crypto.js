var crypto = require('crypto')

var random = function(length, chars) {
  chars = chars || "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789"
  var rnd = crypto.randomBytes(length),
      value = new Array(length),
      len = chars.length

  for (var i=0; i<length; i++) {
    value[i] = chars[rnd[i] % len]
  }

  return value.join('')
}

module.exports.random = random
