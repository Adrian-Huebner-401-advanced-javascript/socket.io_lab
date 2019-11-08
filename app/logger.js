'use strict';

const io = require('socket.io-client');
const client = io.connect('http://localhost:3001');

client.on('file-save', () => {
  console.log('file has been saved')
});

client.on('file-error', () => {
  console.log('file has had an error')
});
