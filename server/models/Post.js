const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type:  String,
    required: true,
  },
  body: {
    type: String,
    required: 'Post must have text!',
    minLength: 1,
    madLength: 500,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    get: date2String,
  }
},
{
  toJSON: {
    getters: true
  }
})

function date2String(date){
  return date.toLocalDateString();
}

const Post = mongoose.model('Post',postSchema);

module.exports = Post;