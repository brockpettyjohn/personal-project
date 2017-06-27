import React, { Component } from 'react';
import AddMessage from './Message_Bar.jsx';
// import SearchBar from './Search_Bar.jsx';
import MessageHeader from './Message_Header.jsx';
import MessageDisplay from './Message_Display.jsx';
import HeaderSearchBlock from './Header_Search_Block.jsx'

class MainMessageView extends Component {
  constructor() {
    super();

    this.state = {
      messages: []
    }

    this.createMessage = this.createMessage.bind( this );
  }
//creatMessage is being passed as prop into AddMessages which is later being used in the Message bar jsx
  createMessage( messageText ) {
    this.setState( { messages: [...this.state.messages, { text: messageText, complete: false } ] })
    console.log( this.state )
  }


  render() {

    const message = this.state.messages
        .filter( message => message )

        .map( (message, index) => (
          <div key={ index }>
          { message.text }
          </div> 
        ) );
       
       
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
              { message }
            </div>
          </div>
            <div className='message-footer'>
              
              <AddMessage createMessage={ this.createMessage } />
            
          </div>
        </div>
    );
  }
}

export default MainMessageView;