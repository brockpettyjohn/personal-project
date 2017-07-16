import React, { Component } from 'react';
import CreatePrivateChannel from './Create_Private_Channel.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CreateChannelModal(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="create-channel-page">
      <CreatePrivateChannel {...props} />
    </div>
  );
}

class Channels extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showWarning: false, 
      channels: [],
      newChannel: ''
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.createChannel = this.createChannel.bind(this)
    this.handleInput = this.handleInput.bind(this)
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
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
   
    handleInput(e) {
        this.setState({
            newChannel: e.target.value,
        })
    }
   
   createChannel(e){
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:3030/channels',
            data: {room_name: this.state.newChannel, id: this} // room_name is the what I called it on the b/e and this.state.newChannel is what we want to go into it and its an object
        }).then(res => {
            console.log("Create Channel Response: ", res)
        }).catch(err => {
            console.log("Create Channel Err: ", err)
        })
    }

    // getMessagesById(e){
    //   axios.get('http://localhost:3030/messages/:id').then(resp => {

    //   })
    // }

    
    render(){
      const channels = this.state.channels.map((channel, i) =>{
        return (
            <Link to ={`/messages/${channel.id}`} style={{textDecoration:'none'}}><div key={i}>
              {channel.room_name}
            </div>
            </Link>
        )
      })
        return(
            <div>
                <CreateChannelModal handleInput= {this.handleInput} newChannel={this.state.newChannel} warn={this.state.showWarning} createChannel = {this.createChannel} />
                <div className='channel-add' onClick={this.handleToggleClick}>
                    CHANNELS
                    <span className='fa-stack'>
                        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
                        <i className="fa fa-plus fa-stack-1x" aria-hidden="true"></i>
                    </span>
                </div>
                  <div id='new-channels'>{channels}</div>
            </div>
        )
    }
}

export default Channels