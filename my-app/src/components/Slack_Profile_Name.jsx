import React, { Component } from 'react'
class SlackProfileName extends Component{
    render(){
        return(
            <div className='user-name'>
                <div id='profile-name'>User Name</div>
                <div id='profile-handle'>@username</div>
            </div>
        )
    }
}

export default SlackProfileName;