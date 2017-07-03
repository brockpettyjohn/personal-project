import React, { Component } from 'react'
 
 class MessageHeader extends Component{
     render(){
         return(
             <div className='header-base'>
                 <span1>#coolkids</span1>
                 <div className="header-icons">
                    <span><i className="fa fa-user-o" aria-hidden="true"></i></span>
                    <span><i className="fa fa-star-o" aria-hidden="true"></i></span>
                    <span><i className="fa fa-thumb-tack" aria-hidden="true"></i></span>
                  </div>
                  
             </div>
         )
     }
 }
 export default MessageHeader