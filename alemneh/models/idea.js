'use strict';
let mongoose = require('mongoose');

let ideaSchema = new mongoose.Schema({
  sector: String,
  teamSize: {type: Number, default: 2},
  lang: String
});

module.exports = mongoose.model('Idea', ideaSchema);
