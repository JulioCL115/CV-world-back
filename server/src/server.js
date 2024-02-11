const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes/index');
const fileUpload = require("express-fileupload");

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());
server.use(cors());
server.use(fileUpload({ 
    useTempFiles: true, 
    tempFileDir: "./uploads", 
}));

server.use('/', routes);

module.exports = server;