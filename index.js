const express = require('express')
const bodyParser = require('body-parser');
const massive = require('massive')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {serveClient: false})
const controller =  require('./server/chatController.js')

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

app.post('/user', controller.create)
app.put('/user/:user_id', controller.update)
app.get('/user/:email', controller.getUser)

// sockets setup 
app.use(express.static(__dirname + '/my-app/build'))

io.on('connection', socket =>{
  console.log('A user connected')
  
  socket.on('chat', data => {
    io.sockets.emit('chat', data);
  })

  // //Send a message after a timeout of 4seconds
  setTimeout(function(){
    socket.send('Sent a message 4seconds after connection!');
  }, 4000);
  // socket.on('disconnect', function () {
  //   console.log('A user disconnected');
  // });
});




server.listen(3000, () => {
    console.log('magic listening on 3000')
})