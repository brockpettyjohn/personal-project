import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

const channelBox = [
    {
        name: 'box1'
    },
    {
        name: 'box2'
    },
    {
        name: 'box3'
    }
]

class ChannelBoxes extends Component {
    render(){
       return (<div>{
            channelBox.map((box, i) => {
                return <p className="boxes" key={i}>{box.name}</p>
                })
            }
        </div>)
    }
}
    
export default ChannelBoxes;