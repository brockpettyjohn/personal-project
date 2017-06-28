import React, { Component } from 'react'

class CreatePrivateChannel extends Component{
    render(){
        return(
            <div className= 'create-channel-page'>
                <form>
                    <div className='create-channel-title'>
                        Create a private channel
                    </div>
                    <div className='create-channel-description'>
                        Channels are where your team communicates.  They're best when organized around a topic - #leads, for example.
                    </div>
                    <span>Name</span>
                    <input type="text" name="name" defaultValue="e.g.leads"></input>
                    <div className="create-name-specs">Names must be lowercase, without spaces or periods, and shorter than 22 characters.</div>
                    <span>Purpose</span>
                    <input type="text" name="purpose"></input>
                    <span>Send invites to</span>
                    <input type="text" name="invites" defaultValue="Search by name"></input>
                    <div className="create-channel-buttons">
                        <button id="cancel">Cancel</button>
                        <button id="create">Create Channel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreatePrivateChannel;