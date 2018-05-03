import React, { Component } from 'react';
import {connect} from 'react-redux';


import 'assets/css/Message/message.css';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import MessagePanelInfo from './MessagePanelInfo';
import MessageRoomInfo from './MessageRoomInfo';
import axios from 'axios';
import isEqual  from 'lodash/isEqual';
// import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../../../actions/types';
import {RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE} from 'actions/types';

import socketIOClient from "socket.io-client";
import {FoldingCube} from 'better-react-spinkit';


const HOST = window.location.origin;
const socket = socketIOClient("http://localhost:5000");



class Message extends Component {

  constructor(props){
    super();
    this.state = {
      search: "",
      loaded: false,
      showComponent: false,
    }


    // this.handleInput = this.handleInput.bind(this);
    // this.triggerInputCSS = this.triggerInputCSS.bind(this);
    // this.exitInputCSS = this.exitInputCSS.bind(this);
      this.showComponent = this.showComponent.bind(this);



    }

    componentDidMount(){

      console.log(this.props);

      socket.on('receiveMessage', (payload) => {
        this.props.fetchMessage(payload);


      });


    }



  componentWillReceiveProps(nextProps){


    if( (nextProps.type_id !== this.props.type_id) &&
    ( isEqual(this.props.channel,nextProps.channel) === false) ){

      //stop spinning once props load
      this.setState({loaded: false});



      //setup a socket here

      socket.emit('joinChannel', {channel: nextProps.channel});
      socket.on('subscribedChannel', (payload) => {

      });


        //only fetch Messages and fetch Users if it's initial channel loading.
      this.props.fetchMessages(nextProps.type_id).then( () => {
        this.props.fetchUsers().then( setTimeout( () => {

          this.setState({loaded:true});
        },2500));




      });
    }
  }

  componentWillUnmount(){

  }

  showComponent(){
    let bool = (this.state.showComponent === true)? false:true;

    // if(bool === false)
    //   this.exitPanelCSS();
    this.setState({showComponent: bool});
  }

  render(){

    const {channel, arraySubscribers, subscribers, messages, type_id, createMessage} = this.props;

    if(!this.state.loaded){
      return(
             <div className="spinner-wrapper">
               <FoldingCube size={80} color='gray'/>
             </div>

           );
    }




    return(

      <div className="col s10">

        <MessageRoomInfo
        subscribers={subscribers}
        channel={channel}
        toggleShowComponent={this.showComponent}/>

        <MessageList
        subscribers={subscribers}
        messages={messages}

        />

        {this.state.showComponent?
          <MessagePanelInfo
          channel={channel}
          subscribers={arraySubscribers}
          toggleShowComponent={this.showComponent}
          /> :
          null
        }

        <MessageInput
        channel={channel}
        type_id={type_id}
        createMessage={createMessage}
        socket={socket}
        />

      </div>

    );
  }


};

export default Message;
