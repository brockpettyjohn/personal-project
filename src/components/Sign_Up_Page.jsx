import React, { Component } from 'react';
import Slack from './../slack.svg'
import axios from 'axios'

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            showWarning: false,
            newFirstName: '',
            newLastName: '',
            newEmail: '',
            newPassword: '',
            newUserId: ''
        }

        this.createUser = this.createUser.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e, variable) {
        this.setState({
            [variable]: e.target.value
        })
    }

    createUser(e) {
        e.preventDefault()
        this.setState({
            showWarning: false,
            newFirstName: '',
            newLastName: '',
            newEmail: '',
            newPassword: '',
            newUserId: ''
        })

        axios({
            method: 'post',
            url: 'https://dry-gorge-21775.herokuapp.com/user',
            data: {
                first_name: this.state.newFirstName,
                last_name: this.state.newLastName,
                email: this.state.newEmail,
                password: this.state.newPassword
            } // not sure if user will work or if i need the hard data outside the var

        }).then(res => {
            this.setState({
                user: res.data
            })
        }).catch(err => {
            console.log("Create User Err: ", err)
        })
    }
    render() {
        console.log(this.createUser)
        return (
            <div className='sign-up-page-wrapper'>
                <div className='sign-up-page-header'>
                    <div id='slack-logo'>
                        <img src={Slack} alt="text" />
                    </div>
                </div>
                <div className='sign-up-page'>
                    <div className='main-page-header'>
                    </div>
                    <div>{this.state.user.first_name ? `signed in as ${this.state.user.first_name}` : null}</div>
                    <h1>Sign Up for Slack</h1>
                    <span>First Name</span>
                    <input type="text" name="first name" onChange={e => { this.handleInput(e, 'newFirstName') }} value={this.state.newFirstName} />
                    <span>Last Name</span>
                    <input type="text" name="last name" onChange={e => { this.handleInput(e, 'newLastName') }} value={this.state.newLastName} />
                    <span>Email</span>
                    <input type="text" name="email" placeholder="@" onChange={e => { this.handleInput(e, 'newEmail') }} value={this.state.newEmail} />
                    <span>Password</span>
                    <input type="password" name="password" placeholder="password" onChange={e => { this.handleInput(e, 'newPassword') }} value={this.state.newPassword} />
                    <div id='sign_up_page_buttons'>
                        <button id='cancel'>Cancel</button>
                        <button id='create' onClick={this.createUser}>Submit</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignUpPage