import React, { Component } from 'react';
import AddMessage from './Message_Bar.jsx';
import MessageHeader from './Message_Header.jsx';
import MessageDisplay from './Message_Display.jsx';
import HeaderSearchBlock from './Header_Search_Block.jsx';
import io from 'socket.io-client'
const socket = io('http://localhost:3030')
class MainMessageView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      user: ''
    }

    this.createMessage = this.createMessage.bind(this);
    this.handleUserConnected = this.handleUserConnected.bind(this)
    this.handleChatMessage = this.handleChatMessage.bind(this)
  }

  componentDidMount() {
    if (!this.state.user) {
      const input = prompt('what is your name is')
      const user = (input)
      this.setState({
        user
      })
    }
    socket.emit('user_connected', this.state.user)
    this.handleUserConnected()
    this.handleChatMessage()

    socket.on('error', data => {
      console.log('this error happened', data)
    })
  }
  handleUserConnected() {
    socket.on('user_connected', data => {
      console.log('this user connected', data)
    })
  }

  handleChatMessage() {

    socket.on('chat_message', data => {
      console.log('fired', data)
      const messages = this.state.messages.concat([data])
      this.setState({
        messages
      })
    })
  }
  //creatMessage is being passed as prop into AddMessages which is later being used in the Message bar jsx
  createMessage(messageText) {
    // this.setState( { messages: [...this.state.messages, { text: messageText, complete: false } ] })
    // console.log( this.state )
    socket.emit('chat_message', { message_body: messageText, sender_id: this.state.user })
  }


  render() {
    console.log(this.state.messages)
    const message = this.state.messages
      .filter(message => message)

      .map((message, index) => (
        <div key={index}>
          {message.sender_id}: {message.message_body}
        </div>
      ));


    return (
      /*<SearchBar searchBar={this.searchBar}/>*/
      <div className='main-message-view'>
        <div className='message-header'>
          <MessageHeader />
          <HeaderSearchBlock />
        </div>
        <div className='message-display'>
          <MessageDisplay />
          <div className='incoming-messages'>
            {message}

          </div>
        </div>
        <div className='message-footer'>

          <AddMessage createMessage={this.createMessage} />

        </div>
      </div>
    );
  }
}

export default MainMessageView;