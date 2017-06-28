import React, { Component } from 'react';
import CreatePrivateChannel from './Create_Private_Channel.jsx'

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="create-channel-page">
      <CreatePrivateChannel />
    </div>
  );
}

class Channels extends Component {
    constructor(props) {
    super(props);
    this.state = {showWarning: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <div className='channel-add' onClick={this.handleToggleClick}>
                    CHANNELS
                    <span className='fa-stack'>
                        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
                        <i className="fa fa-plus fa-stack-1x" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default Channels