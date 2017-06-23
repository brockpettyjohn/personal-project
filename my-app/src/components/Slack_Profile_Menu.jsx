import React, { Component } from 'react'

const slackMenu = [
    {
        name: 'User Name'
    },
    {
        name: 'Set a status'
    },
    {
        name: 'Profile & account'
    },
    {
        name: 'Preferences'
    },
    {
        name: 'Set yourself to away'
    },
    {
        name: 'Help & feedback'
    },
]

class SlackProfileMenu extends Component {
    render(){
        return (<div>{
            slackMenu.map((item, i) =>{
                return <p key={i}>{item.name}</p>
                })
            }     
        </div>)
    }
}

export default SlackProfileMenu;