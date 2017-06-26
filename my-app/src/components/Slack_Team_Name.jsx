import React, { Component } from 'react'
class SlackTeamName extends Component{
    render(){
        return(
            <div className='user-name'>
                <div id='team-name-modal'>Team Name</div>
                <div id='team-channel'>team.name.com</div>
            </div>
        )
    }
}

export default SlackTeamName;