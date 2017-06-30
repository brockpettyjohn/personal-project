import React, { Component } from 'react'
import Slack from './../slack.svg'

class LogInPage extends Component {
    render() {
        return (
            <div className='login-page-wrapper'>
                <div className='login-page-header'>
                    <img src={Slack} alt="text" />
                    <button>Sign Up</button>
                </div>
                <div className='login-box-wrapper'>
                    <div className='login-box'>
                        <h1>Sign in to Slack</h1>
                        <span>Enter your email address and password</span>
                        <input placeholder='you@example.com' />
                        <input placeholder='password' />
                        <button>Continue</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default LogInPage