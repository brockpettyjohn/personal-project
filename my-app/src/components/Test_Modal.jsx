import React, { Component } from 'react'
import MenuModal from './Menu_Modal.jsx'

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      <MenuModal />
    </div>
  );
}

class TestModal extends Component {
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
  
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button id='modal-toggle-header' onClick={this.handleToggleClick}>
          <div id='team-name'>Team Name</div>
          <div id='user-name'>User Name</div>
          {this.state.showWarning}
        </button>
      </div>
    );
  }
}

export default TestModal;