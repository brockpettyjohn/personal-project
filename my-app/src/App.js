import React, { Component } from 'react';
// import SidebarMenu from './components/Sidebar_Menu.jsx';
// import MainMessageView from './components/Main_Message_View.jsx'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import router from './router.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: false,
      users: [],
      newFirstName: '',
      newLastName: '',
      newEmail: '',
      newPassword: ''
    }

    this.createUser = this.createUser.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    if (!this.state.users.length) {
      axios.get('http://localhost:3030').then(resp => {
        this.setState({
          channels: resp.data
        })
      })
    }
  }

  handleInput(e) {
    this.setState({
      new: e.target.value,
    })
  }

  createUser(e) {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3030',
      data: {
        first_name: this.state.newFirstName,
        last_name: this.state.newLastName,
        email: this.state.newEmail,
        password: this.state.newPassword
      } // not sure if user will work or if i need the hard data outside the var

    }).then(res => {
      console.log("Create User Response: ", res)
    }).catch(err => {
      console.log("Create User Err: ", err)
    })
  }
  render() {

    return (
      <div className="all-menus">
        <BrowserRouter>
          {router}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;