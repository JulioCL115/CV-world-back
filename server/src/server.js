const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes/index');
const fileUpload = require("express-fileupload");
const path = require('path');
const server = express();

console.log('Prueba');

server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());
server.use(cors());
server.use(fileUpload({ 
    useTempFiles: true, 
    tempFileDir: "./uploads",
}));
server.use(express.static(path.resolve('src/public')));

server.use('/', routes);

server.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});
  
module.exports = server;