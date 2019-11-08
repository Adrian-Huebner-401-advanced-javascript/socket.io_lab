'use strict';

const fs = require('fs');
const io = require('socket.io-client');
const client = io.connect('http://localhost:3001');

const faker = require('faker');

client.emit('speak', faker.hacker.phrase());

const util = require('util');
const fsRead = util.promisify(fs.readFile);
const fsWrite = util.promisify(fs.writeFile);

const readFile = (filepath) => fsRead(filepath);
const writeFile = (filepath, buffer) => fsWrite(filepath, buffer);
const upperCase = (buffer) => {
  const convertedBuffer = buffer.toString().trim().toUpperCase();
  return Buffer.from(convertedBuffer);
}

const alterFile = (file) => {
  return readFile(path)
    .then(contents => upperCase(contents))
    .then(buffer => {
      return writeFile(path, buffer)
        .catch(error => client.emit('file-error', `${text.error}`))
    })
    .then(() => client.emit('file-save'))
    .catch(error => client.emit('file-error'))
};

module.exports = {
  readFile,
  writeFile,
  upperCase,
  alterFile
}
