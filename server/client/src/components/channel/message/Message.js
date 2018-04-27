import React, { Component } from 'react';
import {connect} from 'react-redux';
import socketIOClient from "socket.io-client";

import './message.css';
import MessageListItem from './messageListItem';
import axios from 'axios';
import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../../../actions/types';

class Message extends Component {

  constructor(props){
    super();
    this.state = {
      input: "",
      loaded: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderConversations = this.renderConversations.bind(this);

  }

  async componentDidMount(){
    // console.log("COMPONENT DID MOUNT");
    // let res = await axios.post('/api/message/new', {body: "the follow up message", channel_id: "5adfbef8db2f763976c5bea7"});
    //
    // return this.props.dispatch({type: RECEIVE_MESSAGE, payload: res.data});

  }

  async componentWillReceiveProps(nextProps){

    if(nextProps.type_id !== this.props.type_id){

      let res = await axios.get('/api/messages/room_id', {params: {room_id: nextProps.type_id}});

      return this.props.dispatch({type: RECEIVE_ALL_MESSAGES, payload: res.data});


    }
  }


  renderConversations(){

    return (
      <ul>
      { this.props.messages.map( (message) =>
        <MessageListItem
          key={message.id}
          author={message.author}
          body={message.body}
          timestamp={message.timestamp} />
        )
      }

      </ul>
    )

}



  handleInput(field){
    return(
      (e) => this.setState({[field]: e.target.value})
    );
  }

  async handleSubmit(e){
    // e.preventDefault();
    // const socket = socketIOClient("http://localhost:5000");
    // socket.emit('chat message', this.state.input);

    let res = await axios.post('/api/message/new', {body: this.state.input, channel_id: this.props.type_id});

    return this.props.dispatch({type: RECEIVE_MESSAGE, payload: res.data});






  }


  render(){




    return(

      <div className="col s10">

        <div className="top-row">

        Top Row

        </div>


        {this.renderConversations()}


        <div className="bottom-row">
          <form onSubmit={this.handleSubmit} className="msg-input-wrapper">
            <button type="button" className="msg-input-gif">
              <i className="fas fa-keyboard"></i>
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


};

export default Message;



// { (this.props.type_id === undefined)?
//   `Message `:
//   `Message # ${this.props.channel.name}`
//
// }
