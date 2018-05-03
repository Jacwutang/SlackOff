import React, { Component } from 'react';
import {connect} from 'react-redux';


import 'assets/css/Message/message.css';
import 'assets/css/Message/messagePanelInfo.css';
import MessagePanelList from './MessagePanelList';


import axios from 'axios';
import isEqual  from 'lodash/isEqual';
// import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../../../actions/types';
import {RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE} from 'actions/types';

import socketIOClient from "socket.io-client";
import {FoldingCube} from 'better-react-spinkit';





class MessagePanelInfo extends Component{
  constructor(props){
    super(props);

    this.togglePanelCSS = this.togglePanelCSS.bind(this);

  }

  togglePanelCSS(){
    this.props.toggleShowComponent();
  }



  render(){
    const {channel,subscribers} = this.props;
    console.log(subscribers, "subscribers");
    console.log("subscriber props", subscribers)

    return(
      <section className="channel-info-panel">
        <div className="about-channel">
          <h4 className="channel-name-header">
          {`About # ${channel.name}`}
          </h4>
          <a className="a-channel-info" onClick={this.togglePanelCSS} >
            <h5> X </h5>
          </a>
        </div>

        <div className="members-list-info">
          <i className="far fa-user fa-2x" aria-hidden="true"></i>
          {Object.keys(this.props.subscribers).length}
          <span> Members </span>
        </div>

        <ul className="members-list">
          {
            (subscribers).map( (user) =>
            <MessagePanelList
            key={user._id}
            user={user}
            /> )
          }


        </ul>




      </section>

    );
  }


};

export default MessagePanelInfo;
