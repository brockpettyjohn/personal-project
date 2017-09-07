import React, { Component } from 'react'
 
 class HeaderSearchBlock extends Component{
     render(){
         return(
             <div className='header-search-block'>
                 <div className="header-search-icons">
                    <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                    <span><i className="fa fa-cog" aria-hidden="true"></i></span>
                    <span><i className="fa fa-columns" aria-hidden="true"></i></span>
                    <input defaultValue='Search'></input>
                    <span><i className="fa fa-at" aria-hidden="true"></i></span>
                    <span><i className="fa fa-star-o" aria-hidden="true"></i></span>
                    <span><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                  </div>
                  
             </div>
         )
     }
 }
 export default HeaderSearchBlock