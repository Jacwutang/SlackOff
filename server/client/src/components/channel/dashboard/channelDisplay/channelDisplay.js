import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import Modal from 'react-responsive-modal';
import { RECEIVE_CHANNEL_ERRORS } from '../../../../actions/types';
import axios from 'axios';

import ChannelIndexItem from './channelIndexItem';

import './channelDisplay.css';
import '../dashboard.css';
import '../animation.css';
import '../../../session/session.css';

class ChannelDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: false,
      input: '',
      currentChannel: '',
      loaded: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

   componentDidMount(){
     axios.get('/api/channels');

     console.log("CHANNEL DISPLAY MOUNTED");
     if(this.props.auth_type){

      this.props.fetchChannels().then( (action) => {

        if(action.payload.length !== 0){
          this.props.history.push(`/messages/channel/${action.payload[0]._id}`);
        }


      });
    }

  }

   componentWillReceiveProps(nextProps){


    if(this.props.auth_type !== nextProps.auth_type){
      //Google Oauth's props comes in later
       this.props.fetchChannels();
    }

    //fetched channels came back

    if(nextProps.channels.length !== this.props.channels.length){

      // For active channel highlighting, 2 cases to test for. Initial fetch and subsequent adds
      let currentChannel = (this.props.channels.length === 0)?
      nextProps.channels[0]:
      nextProps.channels.slice(-1)[0];


      return this.setState({
        currentChannel: currentChannel
      });

    }

  }



  handleSubmit(e){
    e.preventDefault();

    this.props.createChannel(this.state.input,this.props.type).then( (action) => {

      if(action.type !== RECEIVE_CHANNEL_ERRORS){
        this.setState({input: '',open: false}).then( () =>
        this.props.history.push(`/messages/channel/${action.payload._id}`))

      }




    });


  }

  handleInput(field){
    return( e =>
      this.setState({ [field]: e.target.value  })
    )
  }


  onOpenModal(){
   this.props.clearErrors();
   this.setState({ open: true });
  };

 onCloseModal(){

   this.setState({ open: false });
  };

 toggleActive(channel){

   this.setState({
     currentChannel: channel
   });

 }
 renderChannels(){



   if(!this.state.currentChannel ){
     return null;
   }



   return(
     <ul className="ul-channel-messages">

      {this.props.channels.map( (channel) => {

        let bool = (channel === this.state.currentChannel)? true: false;

        return(
           <ChannelIndexItem
           key={channel._id}
           channel={channel}
           active={bool}
           onToggle={this.toggleActive}
           />
        )
      })}


     </ul>
  );
 }

 renderModalContent(){
   return(
     <div className="modal-content">
        <ul className="errors-ul">
          {this.props.errors.map( (err,idx) => (
            <li className="errors-li" key={idx}>
              {err}
            </li>

          ))
          }

        </ul>

       <h3>Create a new Channel</h3>

       <div className="modal-form">
         <input
           placeholder="Enter channel name"
           type="text"
           required
           value={this.state.input}
           onChange={this.handleInput('input')}
          />
          <a onClick={(e) => this.handleSubmit(e)}>
            <i class="fa fa-paper-plane fa-2x"></i>
          </a>

      </div>


     </div>
  );
 }


  render(){


    const { open } = this.state;
    return(
      <div>
        <div className="message-display-add">
          <span className="message-type-header"> Channels </span>
          <span> <i className="fas fa-search search-channel" color="white"></i>  </span>

          <a onClick={() => this.onOpenModal() }>
            <i className="fas fa-user-plus"></i>
          </a>



          <Modal
            open={open}
            onClose={() => this.onCloseModal()}
            little >
            {this.renderModalContent()}



          </Modal>

        </div>

        {this.renderChannels()}

      </div>
    )
  }
};

export default ChannelDisplay;


//
