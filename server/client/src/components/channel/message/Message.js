import React, { Component } from 'react';
import {connect} from 'react-redux';
import socketIOClient from "socket.io-client";

import './message.css';
import MessageListItem from './messageListItem';
import axios from 'axios';
import isEqual  from 'lodash/isEqual';
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

   componentDidMount(){
    console.log("MESSAGE MOUNTED",this.props);


    // let res = await axios.post('/api/message/new', {body: "the follow up message", channel_id: "5adfbef8db2f763976c5bea7"});
    //
    // return this.props.dispatch({type: RECEIVE_MESSAGE, payload: res.data});
    // this.props.fetchMessages(this.props.type_id);

  }

  componentWillReceiveProps(nextProps){
    console.log("COMPONENT WILL RECIEVE PROPS");
    console.log(this.props, "THIS PROPS");
    console.log(nextProps, "NEXT PROPS");
    if( (nextProps.type_id !== this.props.type_id) &&
    ( isEqual(this.props.channel,nextProps.channel) === false) ){


      this.props.fetchMessages(nextProps.type_id);



    }


  }


  renderConversations(){

    return (
      <ul>
      { this.props.messages.map( (message) =>
        <MessageListItem
          key={message._id}
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

   handleSubmit(e){
    e.preventDefault();
    // const socket = socketIOClient("http://localhost:5000");
    // socket.emit('chat message', this.state.input);

    // let res = await axios.post('/api/message/new', {body: this.state.input, channel_id: this.props.type_id});
    //
    // return this.props.dispatch({type: RECEIVE_MESSAGE, payload: res.data});

    this.props.createMessage(this.state.input, this.props.type_id).then(() => {
      console.log(this.props, "CURRENT PROPS");

      this.setState({input: ''});



    })






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
            placeholder=
            { (this.props.type_id === undefined)?
              `Message `:
              `Message #${this.props.channel.name}`

            }



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
