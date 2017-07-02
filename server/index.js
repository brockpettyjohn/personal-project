const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { serveClient: false });
const controller = require('./chatController.js');
const config = require('./config.js')


users = [];
channels = [];
connections = [];

app.use(bodyParser.json());
app.use(cors())


// massive({
//   host: 'localhost',
//   port: 5432,
//   database: 'brockpettyjohn'
// }).then (db =>{
//   app.set('db', db);
// });

// massive(
//   config.database
// ).then (db =>{
//   app.set('db', db);
// });

massive({
  host: config.host,
  port: config.port,
  database: config.database,
  password: config.password,
  user: config.user
}).then(db => {
  app.set('db', db);
  console.log(app.settings)
})
  .catch(err => {
    console.log('\n\n DB connect error >> ', err.message)
  });

app.post('/user', controller.createUser)

app.put('/user/:user_id', controller.update)

app.get('/user/:email', controller.getUser)

app.post('/channels', controller.createChannel)

app.get('/channels/:id', controller.getChannel)

app.get('/channels/', controller.getAllChannels)

app.get('/messages/', controller.getAllMessages)

app.get('/user_login/', controller.userLogin)


// app.use(express.static(__dirname + '/my-app/build'))

// sockets setup 

io.on('connection', socket => {
  console.log('A user connected')

  socket.on('user_connected', data => {
    socket.broadcast.emit('user_connected', { data })
    socket.emit('user_connected', { data })
  })

  socket.on('chat_message', data => {
    controller.createMessage(app, data).then(resp => {
      socket.broadcast.emit('chat_message', data)
      socket.emit('chat_message', data)
    })
      .catch(err => {
        socket.emit('error', err.message)
      })
    console.log(data)

  })

  socket.on('chat', data => {
    socket.broadcast.emit('chat', data);
  })

  //Send a message after a timeout of 4seconds
  setTimeout(function () {
    socket.send('Sent a message 4seconds after connection!');
  }, 4000);
});



//had server.listen before and changed it to see if the variable definition was the problem
server.listen(3030, () => {
  console.log('magic listening on 3030')
})