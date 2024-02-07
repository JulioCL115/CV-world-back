const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRouter = require('./routes/userRouter')

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());
server.use(cors());

server.use('/', userRouter)

module.exports = server;