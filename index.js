var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('i think i saw something...');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
 console.log('i think i saw something...');
  });
  //game try!
  socket.on('ademola', function(gme){
    io.emit('ademola', gme);
  });
  //power up
   socket.on('power', function(hunts){
    io.emit('power', hunts);
  });
  //webcam
socket.on('webcam', function(webcam){
    io.emit('webcam', webcam);
  });
  //move down
  socket.on('player2-1', function(down){
    io.emit('player2-1', down);
  });
  //player2
  socket.on('player2', function(hunts){
    io.emit('player2', hunts);
  });
  //move down
  socket.on('player2-1', function(down){
    io.emit('player2-1', down);
  });
  //player1
   socket.on('hunts', function(hunts){
    io.emit('hunts', hunts);
  });
   socket.on('player1', function(hunts){
    io.emit('player1', hunts);
  });
  //state
  socket.on('state', function(stats){
    io.emit('state', stats);
  });
  //move down
  socket.on('player1-1', function(down){
    io.emit('player1-1', down);
  });
});
http.listen(port, function(){
  console.log('listening on *:' + port);
});
