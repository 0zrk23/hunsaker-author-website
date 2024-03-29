const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/books_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

module.exports = mongoose.connection;