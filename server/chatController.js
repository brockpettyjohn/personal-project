const app = require('./index')

module.exports={
createUser: (req, res) => {
    var user = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password
    ];
    console.log(user);
    req.app.get('db').create_user(user).then(resp => {
        res.send('user added')
        console.log(user)
    })
},
    update: (req, res) => {
    req.app.get('db').update_user([req.params.user_id, req.body.first_name, req.body.last_name, req.body.email, req.body.password]).then(updatedUser => {
      console.log(updatedUser)
      res.send('Updated' + updatedUser)
    }).catch(function (err) {
      res.status(500).send(err)
    })
},
    getUser: (req, res) => {
        req.app.get('db').get_user_by_email(req.params.email).then(foundUser =>{
            res.send(foundUser);
        }).catch(err => {
      res.status(500).send(err)
    })
},

createChannel: (req, res) => {
    
    var room = req.body.room_name;
    
    console.log(room);
    req.app.get('db').create_channel(room).then(resp => {
        res.json(resp)
        console.log(resp)
    })
},

  getChannel: (req, res) => {
        req.app.get('db').get_channel_by_id(req.params.id).then(foundChannel =>{
            res.send(foundChannel);
        }).catch(err => {
      res.status(500).send(err)
    })
},

getAllChannels: (req, res) => {
        req.app.get('db').get_all_channels().then(foundChannels =>{
            res.json(foundChannels);
        }).catch(err => {
      res.status(500).send(err)
    })
},

getAllMessages: (req, res) => {
  req.app.get('db').get_messages().then(foundMessages =>{
    res.json(foundMessages);
  }).catch(err => {
    res.status(500).send(err)
  })
},

createMessage: (app, messageData) => {
    const db = app.get('db')
    console.log(db)
    const message = messageData.message_body;
    const sender_id = messageData.sender_id
    console.log(message);
     return db.create_message([message, sender_id]).then(resp => {
        return resp
        console.log(resp)
    })
},

}