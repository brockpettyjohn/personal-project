import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import socket-client here

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }


    // remember this awesome stuff?? REMEBER Me!
    // OTHERWISE SHIT BREAKS.
    this.onInputChange = this.onInputChange.bind(this)
  }

  componentDidMount(){
    // connent to the socket in here
  }

  componentWillUnmount(){
    // disconnent in here
  }


  onInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }



  render() {
    return (
      <div>

        <input
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        {this.state.inputValue || 'THIS WILL MOVE WHEN YOU TYPE SOMEHTING'}
      </div>
    )
  }
}


export default Home
