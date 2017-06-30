import React from 'react'
import SignUpPage from './components/Sign_Up_Page.jsx'
import MessagePage from './components/Message_Page.jsx'
import { Route, Switch } from 'react-router-dom'

export default (

    <Switch>

        <Route
            component={SignUpPage}
            exact path='/'
        />

        <Route
            component={MessagePage}
            exact path='/message-page'
        />

    </Switch>

)



