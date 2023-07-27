const socketIO = require('socket.io');

const connectSocketServer = (httpServer) => {
  const io = socketIO(httpServer);
  console.log('Socket Server Initialized')

  //connections for the future

  return io;
}

module.exports = connectSocketServer;