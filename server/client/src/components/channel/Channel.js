import React, { Component } from 'react';
import {connect} from 'react-redux';


import './channel.css';
import DashBoard from './dashboard/Dashboard';
import Message from './message/message_container';
import { withRouter } from 'react-router';

class Channel extends Component {
  constructor(){
    super();

  }

  componentDidMount(){

    console.log("CHANNEL MOUNTED", this.props);
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

      <DashBoard />
      <Message />



    </div>


    );
  }
};

export default Channel;
