'use strict';

const io = require('socket.io')(3001);

io.on('connection', (socket) => {
  console.log('Connected', socket.id);
  socket.on('speak', payload => io.emit('message', payload));
});
