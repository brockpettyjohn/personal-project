import React, { Component } from 'react'

const switchTeamMenu = [
    {
        name: 'Apps & integrations'
    },
    {
        name: 'Customize Slack'
    },
    {
        name: 'Statistics'
    },
    {
        name: 'Sign out of DevMountain'
    }
]

class SwitchTeamMenu extends Component {
    render(){
        return (<div>{
            switchTeamMenu.map((item, i) =>{
                return <p key={i}>{item.name}</p>
                })
            }     
        </div>)
    }
}

export default SwitchTeamMenu;