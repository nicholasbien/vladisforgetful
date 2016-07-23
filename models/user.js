'use strict'

let mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  _id: String,
  username: String,
  password: String,
  playlists: [String]
})

module.exports = mongoose.model('User', UserSchema, 'users')
