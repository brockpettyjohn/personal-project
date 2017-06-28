module.exports={
create: (req, res) => {
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
    var room = [
        req.body.room_name
    ];
    console.log(room);
    req.app.get('db').create_channel(room).then(resp => {
        res.send('room added')
        console.log(room)
    })
},

  getChannel: (req, res) => {
        req.app.get('db').get_channel_by_id(req.params.id).then(foundChannel =>{
            res.send(foundChannel);
        }).catch(err => {
      res.status(500).send(err)
    })
},



}