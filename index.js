const express = require('express')
const bodyParser = require('body-parser');
const massive = require('massive')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)
const controller =  require('./chatController')

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
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// io.sockets.on('connection', socket =>{
//   connections.push(socket);
//   console.log('Connected: %s sockets connected', connections.length)

// socket.on('disconnect', data =>{
//   connections.splice(connections.indexOf(socket), 1)
//   console.log('Disconnected: %s sockets connected, connections.length')
//   })
// });





app.listen(3000, () => {
    console.log('magic listening on 3000')
})