const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  site: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  }
})

module.exports = linkSchema