const app = require('./index')

module.exports = {
    createUser: (req, res) => {
        var user = [
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            req.body.password,
            req.body.user_id
        ];
        console.log(user);

        req.app.get('db').get_user_by_email(req.body.email)
            .then(resp => {
                console.log(resp)
                if (resp.length) {
                    throw new Error('user already exists')
                }
                return req.app.get('db').create_user(user).then((newUser) => {
                    console.log('did i create a user??')
                    if (newUser.length) return false
                    if (!newUser.length) return true
                })
                    .catch(err => {
                        console.log('err in create user', err.message)
                        throw new Error(err.message)
                    })

            })
            .then(created => {
                console.log('created >> ', created)
                if (!created) throw new Error('why did i get this error after creating user')
                return req.app.get('db').get_user_by_email(req.body.email)
                    .then(user => {
                        console.log('did i get the user?', user[0])
                        return user[0]
                    })
                    .catch(err => {
                        console.log('error getting user after created', err.message)
                        throw new Error(err.message)
                    })
            })
            .then(foundUser => {
                res.json(foundUser)
            })
            .catch(err => {
                console.log('\n error at the end of create', err.message)
                res.send(err.message)
            })
        // then if it exist 


    },

    userLogin: (req, res) => {
        // req.app.get('db').get_user_by_email(req.body.email)
        //     .then(validUser => {
        //         console.log(validUser)
        //         if (validUser.email === req.body.email) {
        //             if (validUser.password === req.body.password) {
        //                 console.log("thumbs up")
        //             }
        //         }
        //         res.send(validUser)
        //     })
        req.login(user, function (err) {
            if (err) { return next(err); }
            return res.redirect('/user/' + req.user.user_name);
        }).catch(function (err) {
            res.status(500).send(err)
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
        req.app.get('db').get_user_by_email(req.params.email).then(foundEmail => {
            if (foundEmail.password === req.params.email)
                return res.send(foundUser);
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
        req.app.get('db').get_channel_by_id(req.params.id).then(foundChannel => {
            res.send(foundChannel);
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    getAllChannels: (req, res) => {
        req.app.get('db').get_all_channels().then(foundChannels => {
            res.json(foundChannels);
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    getAllMessages: (req, res) => {
        req.app.get('db').get_messages().then(foundMessages => {
            res.json(foundMessages);
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    createMessage: (app, messageData) => {
        console.log(app)
        const db = app.get('db')
        const message = messageData.message_body;
        const sender_id = messageData.sender_id;
        const convoId = messageData.conversation_id;
        console.log(message);
        return db.create_message([message, sender_id, convoId ]).then(resp => {
            return resp
            console.log(resp)
        })
    },

    getMessagesByConvoId: (req, res) => {
        console.log(req.params.id)
        req.app.get('db').get_messages_by_convo_id(req.params.id).then(foundMessages => {
            
            res.json(foundMessages);
        }).catch(err => {
            res.status(500).send(err)
        })
    }

}