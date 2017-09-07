import React, { Component } from 'react'

class DirectMessage extends Component {
    render(){
        return(
             <div>
                <div className='direct-message-add'>
                    DIRECT MESSAGES
                    <span className='fa-stack'>
                        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
                        <i className="fa fa-plus fa-stack-1x" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default DirectMessage;