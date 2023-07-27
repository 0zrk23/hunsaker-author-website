// import mongoose from "mongoose";
const mongoose = require('mongoose');
const linkSchema = require('./linkSchema');
// const {Schema} = mongoose;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  cover: {
    type: String,
  },
  mockUp: {
    type: String,
  },
  synopsis: {
    type: String,
    required: true,
  },
  elevatorPitch: {
    type: String,
    required: true,
  },
  links: {
    type: [linkSchema],
    // required: [ true, 'Must have at least one link']
    validate: {
      validator: function(links) {
        return links.length > 0;
      },
      message: 'Must have one link',
    }
  },
  genre: {
    type: [String],
    validate: {
      validator: function(genres) {
        return genres.length > 0;
      },
      message: 'Must have one genre',
    }
  },
  labels: [String],
  tags: [String],
});

const Book = mongoose.model('Book',bookSchema);
// console.log(Book);
module.exports = Book;