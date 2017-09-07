import React, { Component } from 'react';
import SidebarMenu from './Sidebar_Menu.jsx';
import MainMessageView from './Main_Message_View.jsx'

class MessagePage extends Component {
  render() {

    return (
      <div className='main-message-page-wrapper'>
        <SidebarMenu />
        <MainMessageView />
      </div>
    );
  }
}

export default MessagePage;
