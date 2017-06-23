import React, { Component } from 'react';
import SlackProfileMenu from './Slack_Profile_Menu';
import CurrentTeamMenu from './Current_Team_Menu';
import SwitchTeamMenu from './Switch_Team_Menu';

class MenuModal extends Component {
   render(){
       return (
           <div className='menu-modal'>
               <SlackProfileMenu />
               <CurrentTeamMenu />
               <SwitchTeamMenu />
           </div>
       )
   }
}

export default MenuModal;