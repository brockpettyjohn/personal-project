import React, { Component } from 'react';
import MenuModal from './components/Menu_Modal.jsx'
// import ChannelBoxes from './components/ChannelBoxes.jsx'
// import AddMessages from "./components/Message_bar.jsx";
// import SearchBar from './components/Search_Bar.jsx';
import SidebarMenu from './components/Sidebar_Menu.jsx';
import MainMessageView from './components/Main_Message_View.jsx'


class App extends Component {
  // constructor() {
  //   super();

//     this.state = {
//       messages: []
//     }

//     this.createMessage = this.createMessage.bind( this );
//   }
// //creatMessage is being passed as prop into AddMessages which is later being used in the Message bar jsx
  // createMessage( messageText ) {
  //   this.setState( { messages: [ { text: messageText, complete: false }, ...this.state.messages ] })
  //   console.log( this.state )
  // }


  render() {
    //not sure why I have this logic in the App folder when this is where I render all my components on the DOM where would I put logic for other components
    // const message = this.state.messages
    //     .filter( message => message )
       
        /*.map( (message, index) => (
          <p key={ index }>
          { message.text }
          </p> 
        ) );*/
    return (
      <div className="all-menus"> 
        <div className='page-layout-wrapper'>
          <SidebarMenu />
          <MainMessageView />
        </div>
        <MenuModal />
        {/*<SearchBar searchBar={this.searchBar}/>*/}
      </div>
    );
  }
}

export default App;