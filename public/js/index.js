var socket = io(); // initialize a request
        
socket.on('connect', function() {
    console.log('connected to server');

    socket.emit('createMsg', {
        from: 'mel',
        text: 'yea, it works for me'
    });
});

socket.on('disconnect', function () {
    console.log('disconnected to server');
});

socket.on('newEmail', function (res) {
    console.log('new email', res);
});

socket.on('newMessage', function(data){
    console.log(data);
});




