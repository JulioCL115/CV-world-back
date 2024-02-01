const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());
server.use(cors());

module.exports = server;