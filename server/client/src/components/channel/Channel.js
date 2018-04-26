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

  }



  render(){
    // if(!this.props.type_id){
    //   return null;
    // }

    return(

    <div className="row">

      <DashBoard />
      <Message />


    </div>


    );
  }
};

export default Channel;
