const express = require('express')
const bodyParser = require('body-parser');
const massive = require('massive')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {serveClient: false})
const controller =  require('./chatController')
const path = require('path')

users = [];
connections = [];

app.use(bodyParser.json());

massive({
  host: 'localhost',
  port: 5432,
  database: 'brockpettyjohn'
}).then (db =>{
  app.set('db', db);
});

app.get('*', (req, res) => {
  console.log('in here.. ')
  res.sendFile(path.join(__dirname + '/my-app/public/index.html'))
})

app.post('/user', controller.create)
app.put('/user/:user_id', controller.update)
app.get('/user/:email', controller.getUser)

// sockets setup
app.use(express.static(__dirname + '/my-app/build'))

io.on('connection', function(socket){
  console.log('A user connected');

  // //Send a message after a timeout of 4seconds
  setTimeout(function(){
    socket.send('Sent a message 4seconds after connection!');
  }, 4000);
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });
});




server.listen(3001, () => {
    console.log('magic listening on 3001')
})



/*

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('A user connected');

  //Send a message after a timeout of 4seconds
  setTimeout(function(){
    socket.send('Sent a message 4seconds after connection!');
  }, 4000);
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });
});
http.listen(3000, function(){
  console.log('listening on 3000');
});
*/
