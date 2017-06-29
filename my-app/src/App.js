import React, { Component } from 'react';
import SidebarMenu from './components/Sidebar_Menu.jsx';
import MainMessageView from './components/Main_Message_View.jsx'


class App extends Component {
  
  render() {
  
    return (
      <div className="all-menus"> 
        <SidebarMenu />
        <MainMessageView />
      </div>
    );
  }
}

export default App;