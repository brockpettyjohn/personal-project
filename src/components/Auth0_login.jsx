import React, { Component } from 'react';
import axios from 'axios;'

class Auth0Login extends Component{

constructor(props) {
    super(props);
    this.state = ''
  }
  componentDidMount(){
    if (!this.state.channels.length){
      axios.get('http://localhost:3030/channels').then(resp =>{
        this.setState({
          channels: resp.data
        })
      })
    }
  }
}