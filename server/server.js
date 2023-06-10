const express = require('express');
const http = require('http');
const socektIO = require('socket.io');
const path = require('path');
const connectSocketServer = require('./config/socketConnection');
//const {authMiddleware}  = require('./utils/auth);
require('dotenv').config();

const db = require('./config/connection')
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

const server = http.createServer(app);
connectSocketServer(server);

app.use(express.urlencoded({extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  server.listen(PORT, () => {
    console.log('Server listening...');
  })
})