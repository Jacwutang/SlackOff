import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import DirectMessageSearch from './DirectMessageSearch';


import 'assets/css/DirectMessageDisplay/directMessageDisplay.css';
import 'assets/css/Dashboard/dashboard.css';
import 'assets/css/animation.css';

class DirectMessageList extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    //fetch direct messages
  }

  render(){
    return(
      <div/>
    );
  }


};

export default DirectMessageList;
