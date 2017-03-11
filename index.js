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
  //player2
  socket.on('player2', function(hunts){
    io.emit('player2', hunts);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
