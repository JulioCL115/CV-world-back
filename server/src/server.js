const express = require('express');
const morgan = require('morgan');
const router = require("./routes");
const cookieParser = require('cookie-parser');
const cors = require('cors');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());
server.use(cors());
server.use(router);
module.exports = server;