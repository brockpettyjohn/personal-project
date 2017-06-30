import React, { Component } from 'react';
import Slack from './../slack.svg'

export default class SignUpPage extends Component {
    render() {
        return (
            <div className='sign-up-page-wrapper'>
                <div id='slack-logo'>
                    <img src={Slack} alt="text" />
                </div>
                <div className='sign-up-page'>
                    <div className='main-page-header'>
                    </div>

                    <h1>Sign In</h1>
                    <span>First Name</span>
                    <input type="text" name="first name" onChange={this.props.handleInput} value={this.props.first_name} />
                    <span>Last Name</span>
                    <input type="text" name="last name" onChange={this.props.handleInput} value={this.props.last_name} />
                    <span>Email</span>
                    <input type="text" name="email" placeholder="@" onChange={this.props.handleInput} value={this.props.email} />
                    <span>Password</span>
                    <input type="text" name="password" placeholder="password" onChange={this.props.handleInput} value={this.props.password} />
                    <div id='sign_up_page_buttons'>
                        <button id='cancel'>Cancel</button>
                        <button id='create' onClick={this.props.createUser}>Submit</button>
                    </div>
                </div>

            </div>
        )
    }
}

