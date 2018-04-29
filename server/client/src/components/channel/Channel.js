import React, { Component } from 'react';
import {connect} from 'react-redux';


import './channel.css';
import DashBoard from './dashboard/Dashboard';
import Message from './message/message_container';
import { withRouter } from 'react-router';
import socketIOClient from "socket.io-client";
const HOST = window.location.origin;
const socket = socketIOClient("http://localhost:5000");

class Channel extends Component {
  constructor(){
    super();

  }

  componentDidMount(){
    if(!this.props.auth){
      this.props.history.push('/');
    }
  }





  render(){
    if(!this.props.auth){
      return null;
    }

    return(

    <div className="row">

      <DashBoard socket={socket}/>
      <Message socket={socket}/>


    </div>


    );
  }
};

export default Channel;
