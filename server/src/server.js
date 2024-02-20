const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes/index');
const fileUpload = require("express-fileupload");

const server = express();

server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // actualiza para que coincida con el dominio desde el cual realizarás la solicitud, en el segundo campo va la web de la que se realiza la solicitud
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(express.json());
server.use(cookieParser());
server.use(cors());
server.use(fileUpload({ 
    useTempFiles: true, 
    tempFileDir: "./uploads", 
}));

server.use('/', routes);

server.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});
  
module.exports = server;
