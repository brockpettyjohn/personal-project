import React, { Component } from 'react';
// import SidebarMenu from './components/Sidebar_Menu.jsx';
// import MainMessageView from './components/Main_Message_View.jsx'

// import { BrowserRouter, Route } from 'react-router-dom'
import router from './router.js'
// import SignUpPage from './components/Sign_Up_Page.jsx'


class App extends Component {


  render() {

    
    return (
      <div className="all-menus">
        {this.props.children}
      </div>
    );
  }
}


export default App;