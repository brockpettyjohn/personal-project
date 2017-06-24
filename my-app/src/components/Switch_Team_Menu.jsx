import React, { Component } from 'react'

const switchTeamMenu = [
    {
        name: 'Sign in to another team...'
    }
    
]

class SwitchTeamMenu extends Component {
    render(){
        return (<div className='switch-team-menu'>{
            switchTeamMenu.map((item, i) =>{
                return <p key={i}>{item.name}</p>
                })
            }     
        </div>)
    }
}

export default SwitchTeamMenu;