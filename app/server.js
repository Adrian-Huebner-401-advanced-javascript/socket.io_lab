'use strict';

const io = require('socket.io')(3001);

io.on('connection', (socket) => {
  console.log('Connected', socket.id);
  socket.on('speak', payload => io.emit('message', payload));
});

io.on('write', (socket) => {
  console.log('Write got where it needs', socket.id);
  socket.on('file-save', payload => io.emit('file saved', payload))
});