'use strict'

const mongoose = require('mongoose')

const secretarySchema = mongoose.Schema({
  name: String,
  age: Number,
  nationality: String
})

const User = mongoose.model("Secretary", secretarySchema)
module.exports = User
