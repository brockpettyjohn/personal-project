import React, { Component } from 'react';
import SlackProfileMenu from './Slack_Profile_Menu';
import CurrentTeamMenu from './Current_Team_Menu';
import SwitchTeamMenu from './Switch_Team_Menu';
import SlackProfileName from './Slack_Profile_Name.jsx'
import SlackTeamName from './Slack_Team_Name.jsx'

class MenuModal extends Component {
   render(){
       return (
           <div className='menu-modal'>
                   <div><SlackProfileName /></div>
                   <SlackProfileMenu />
                    <div>
                        <SlackTeamName />
                        <CurrentTeamMenu />
                    </div>
                   <SwitchTeamMenu />
            </div>
            
       )
   }
}

export default MenuModal;