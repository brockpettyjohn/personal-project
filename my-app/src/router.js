
import SignUpPage from './components/Sign_Up_Page.jsx'
import MessagePage from './components/Message_Page.jsx'
import LogInPage from './components/Log_In_Page.jsx'

export const routes = [
    {
        path:'/',
        component: LogInPage,
        exact: true,
    },
    {
        path:'/sign_up',
        component: SignUpPage,
        exact: true,
    },
    {
        path:'/message_page',
        component: MessagePage,
        exact: true,
    },
]