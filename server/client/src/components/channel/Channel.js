import React, { Component } from 'react';
import {connect} from 'react-redux';


import './channel.css';
import DashBoard from './dashboard/Dashboard';
import Message from './message/Message';
import { withRouter } from 'react-router';


class Channel extends Component {
  constructor(){
    super();

  }

  componentDidMount(){
    // console.log("channel container PROPS", this.props);
  }



  render(){
    return(

    <div className="row">

      <DashBoard />
      <Message />


    </div>


    );
  }
};

export default Channel;
