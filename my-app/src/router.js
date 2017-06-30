import React from 'react'
import SignUpPage from './components/Sign_Up_Page.jsx'
import MessagePage from './components/Message_Page.jsx'
import LogInPage from './components/Log_In_Page.jsx'
import { Route, Switch } from 'react-router-dom'

export default (

    <Switch>

        <Route
            component={LogInPage}
            exact path='/'
        />

        <Route
            component={SignUpPage}
            exact path='/sign_up'
        />

        <Route
            component={MessagePage}
            exact path='/message_page'
        />

    </Switch>

)



