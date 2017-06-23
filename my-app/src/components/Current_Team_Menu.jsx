import React, { Component } from 'react'

const currentTeamMenu = [
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

class CurrentTeamMenu extends Component {
    render(){
        return (<div>{
            currentTeamMenu.map((item, i) =>{
                return <p key={i}>{item.name}</p>
                })
            }     
        </div>)
    }
}

export default CurrentTeamMenu;