import React, { Component } from 'react';
import {connect} from 'react-redux';
import socketIOClient from "socket.io-client";

import './message.css';
import MessageListItem from './messageListItem';
import axios from 'axios';

class Message extends Component {

  constructor(props){
    super();
    this.state = {
      input: "test message",
      messages: ["hey man", "yo what up"],
      loaded: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderConversations = this.renderConversations.bind(this);

  }

  async componentDidMount(){
    console.log("MESSAGES COMPONENT MOUNTED");
    //fetch all Messages in this chatroom.
    // let res = await axios.get('/api/messages/room_id',{
    //   params: {
    //     room_id: "5adfbef8db2f763976c5bea7"
    //   }
    // });
    //
    // console.log(res, "MESSAGES RESULT IS");

    let res = await axios.post('/api/message/new', {body: this.state.input, channel_id: "5adfbef8db2f763976c5bea7"});

    console.log(res);


    //this.props.fetchMessages(channel_id)
    // then setstate loaded: true
    //setState Messages
  }


  renderConversations(){
    // console.log("HERE",this.state.messages);
    return(
      <ul>
      { this.state.messages.map( (message) => (
        <MessageListItem
        key={message.id}
        author={message.author}
        body={message.body}
        timestamp={message.timestamp}/>
      )) }
      </ul>
    );



 }




  handleInput(field){
    return(
      (e) => this.setState({[field]: e.target.value})
    );
  }

  handleSubmit(e){
    e.preventDefault();
    const socket = socketIOClient("http://localhost:5000");
    window.alert("SUBMITEED");
    socket.emit('chat message', this.state.input);


    //create a new message

  }


  render(){
    //if loading, then spin
    // if(!this.state.loading){
    //  <Spinner />
    //}

    return(

      <div className="col s10">

        <div className="top-row">

        Top Row

        </div>


        {this.renderConversations()}


        <div className="bottom-row">
          <form onSubmit={this.handleSubmit} className="msg-input-wrapper">
            <button type="button" className="msg-input-gif">
              <i class="fas fa-keyboard"></i>
            </button>
            <input
            id="msg-input"
            placeholder="Message"
            value={this.state.input}
            onChange={this.handleInput('input')} />

          </form>


        </div>
      </div>

    );
  }


}

export default connect(mapStateToProps,mapDispatchToProps)(Message);

function mapStateToProps(state){
  return (
    {
      // messages: state.messages
    }
  );

};


function mapDispatchToProps(dispatch){
  return(
    {

    }
  )

};
