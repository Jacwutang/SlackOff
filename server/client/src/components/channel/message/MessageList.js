import React, { Component } from 'react';
import {connect} from 'react-redux';


import 'assets/css/Message/message.css';
import MessageListItem from './MessageListItem';
import MessageInput from './MessageInput';
import MessagePanelInfo from './MessagePanelInfo';
import axios from 'axios';
import isEqual  from 'lodash/isEqual';
// import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../../../actions/types';
import {RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE} from 'actions/types';

import socketIOClient from "socket.io-client";
import {FoldingCube} from 'better-react-spinkit';


const HOST = window.location.origin;
const socket = socketIOClient("http://localhost:5000");

class MessageList extends Component{
  constructor(props){
    super(props);

    this.state = {
      loaded: false,

    }

  }

  componentWillReceiveProps(nextProps){

  }

  componentDidMount(){
    this.scrollToBottom();

  }
  componentWillUpdate() {
    let list = this.refs.list;

    this.shouldScroll =
      list.scrollTop + list.offsetHeight === list.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScroll) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    let list = this.refs.list;
    list.scrollTop = list.scrollHeight;
  }




  render(){
      const {subscribers,messages} = this.props;
      console.log("MESSAGE-LIST", subscribers, messages);
      return(

          <ul className="ul-messages" ref="list">
            {this.props.messages.map( (message) =>
              <MessageListItem
              key={message._id}
              author={subscribers[message.author].username}
              body={message.body}
              timestamp={message.timestamp}
              time_zone={message.time_zone}
              />
            )
            }
          </ul>

       );


  }

}

export default MessageList;
