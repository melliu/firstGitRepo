const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io');

const express = require('express');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('new user connected');
    socket.on('disconnect', () => {
        console.log('user was disconnected');
    });
});



// express middle ware
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log('server is up on port ', port);
});

 