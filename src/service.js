import axios from 'axios'
import React from 'react'



export function getMessagesById(id){
    axios.get('https://dry-gorge-21775.herokuapp.com/messages/' + id)
      .then(resp => {
          console.log(resp)
        // this.setState({
        //   message: resp.data
        // })
      })
      .catch(err => {
        console.log('why no messages ? ', err.message)
      })
  }
