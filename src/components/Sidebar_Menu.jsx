import React, { Component } from 'react';
// import HeaderSideBar from './Header_Sidebar.jsx'
// import AllUnreads from './All_Unreads.jsx'
// import AllThreads from './All_Threads.jsx'
import Channels from './Channels.jsx'
import DirectMessages from './Direct_Messages.jsx'
import TestModal from './Test_Modal.jsx'
import QuickSwitcher from './Quick_Switcher.jsx'

class SideBarMenu extends Component {


    render() {
        return (
           
                 <div className='sidebar-menu'>
                        <div className='team_id_header'>
                            <TestModal />
                            {/*<HeaderSideBar />*/}
                        </div>
                    <div className='sidebar-words'>
                        <ul>
                            <li>All Unreads</li>
                            <li>All Threads</li>
                            <li><h2><Channels /></h2></li>
                            <li><h2><DirectMessages /></h2></li>
                        </ul>
                    </div>
                        <button className= 'quick-switcher'><QuickSwitcher /></button>
                 </div>
          
        )
    }
}
export default SideBarMenu;