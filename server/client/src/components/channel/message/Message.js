import React, { Component } from 'react';
import {connect} from 'react-redux';


import './message.css';
import MessageListItem from './MessageListItem';
import MessageInput from './MessageInput';
import axios from 'axios';
import isEqual  from 'lodash/isEqual';
import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../../../actions/types';


import {FoldingCube} from 'better-react-spinkit';





class Message extends Component {

  constructor(props){
    super();
    this.state = {
      search: "",
      loaded: false
    }

    this.handleInput = this.handleInput.bind(this);

    this.triggerInputCSS = this.triggerInputCSS.bind(this);
    this.exitInputCSS = this.exitInputCSS.bind(this);

  }

   componentDidMount(){

    }

  componentWillReceiveProps(nextProps){
    console.log("COMPONENT WILL RECIEVE PROPS");
    console.log(this.props, "THIS PROPS");
    console.log(nextProps, "NEXT PROPS");
    if( (nextProps.type_id !== this.props.type_id) &&
    ( isEqual(this.props.channel,nextProps.channel) === false) ){

      //only fetch Messages and fetch Users if it's initial channel loading.

      this.props.fetchMessages(nextProps.type_id).then( () => {
        this.props.fetchUsers().then( setTimeout( () => {
            this.setState({loaded:true});
        },3000));


      });
    }
  }




  renderConversations(){
    if(!this.state.loaded){
      return(
        <div className="spinner-wrapper">
          <FoldingCube size={80} color='gray'/>
        </div>

      )

    }

    const {subscribers} = this.props;

    console.log("SUBSCRIBERS ARE", subscribers);

    return (

        this.props.messages.map( (message) =>
          <MessageListItem
            key={message._id}
            author={subscribers[message.author].username}
            body={message.body}
            timestamp={message.timestamp}
            time_zone={message.time_zone} />
        )

     );

   };



  handleInput(field){
    return(
      (e) => this.setState({[field]: e.target.value})
    );
  }



  triggerInputCSS(e){
    e.preventDefault();

    e.currentTarget.classList.add("selected");
  };

  exitInputCSS(e){
    e.preventDefault();

    e.currentTarget.classList.remove("selected");
  }


  renderTopRowLeft(){
    if(!this.state.loaded){
      return;
    }

    return(

      <div className="top-row-left">

      <h4 className="channel-name-header">
        {` # ${this.props.channel.name}`}
      </h4>

      <span className="channel-people">
        <i className="far fa-user fa-2x"></i>
        <span> <strong> {this.props.channel.members.length} </strong> </span>
      </span>

      </div>
    );

  }

  renderTopRowRight(){
    if(!this.state.loaded){
      return;
    }

    return (
      <div className="top-row-right">

        <form  className="msg-input-wrapper search-container" onClick={this.triggerInputCSS} onBlur={this.exitInputCSS}>
          <button type="button" className="msg-input-gif">
            <i className="fas fa-search"></i>
          </button>
          <input
          id="msg-input"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleInput('search')} />
        </form>

      </div>

    );
  }

  render(){

    const {channel, type_id} = this.props;

    return(

      <div className="col s10">

        <div className="top-row">

          {this.renderTopRowLeft()}
          {this.renderTopRowRight()}

        </div>

        <ul className="ul-messages">

            {this.renderConversations()}

        </ul>

        <MessageInput
        channel={channel}
        type_id={type_id}
        createMessage={this.props.createMessage}
        socket={this.props.socket}
        />




      </div>

    );
  }


};

export default Message;
