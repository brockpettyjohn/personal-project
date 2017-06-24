import React, { Component } from 'react'

class HeaderSidebar extends Component {
  constructor(props) {
    super(props);
    //why don't I need to bind this?
    this.state = { isModalOpen: false }
    // this.onClick = this.onClick.bind(this)
  }


  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Open modal</button>
        <div isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <div className="current-team-name">Team Name</div>
          <div className='current-user-name'>Brock Pettyjohn</div>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </div>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}

export default HeaderSidebar;