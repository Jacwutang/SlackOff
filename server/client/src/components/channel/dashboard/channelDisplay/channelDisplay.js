import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import Modal from 'react-responsive-modal';

import axios from 'axios';

import ChannelIndexItem from './channelIndexItem';

import './channelDisplay.css';
import '../dashboard.css';
import '../animation.css';

class ChannelDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: false,
      input: '',
      currentChannel: '',
      loading: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

   componentDidMount(){

    // console.log("channel display props", this.props);

    if(this.props.auth_type){
      console.log("fetching channels");
      this.props.fetchChannels().then((action) => this.props.history.push(`/messages/channel/${action.payload[0]._id}`));
    }

  }
   componentWillReceiveProps(nextProps){


    if(this.props.auth_type !== nextProps.auth_type){
      //Google Oauth's props comes in later
       this.props.fetchChannels();
    }

    //fetched channels came back
    // console.log(this.props.channels, nextProps.channels);
    if(nextProps.channels.length !== this.props.channels.length){


      // let currentChannel = Object.values(nextProps.channels.slice(0)[0])[0];


      // For active channel highlighting, 2 cases to test for. Initial fetch and subsequent adds
      let currentChannel = (this.props.channels.length === 0)?
      Object.values(nextProps.channels.slice(0)[0])[0]:
      Object.values(nextProps.channels.slice(-1)[0])[0];






      return this.setState({
        currentChannel: currentChannel
      });

    }

  }



  handleSubmit(e){
    e.preventDefault();
    this.props.createChannel(
      this.state.input,
      this.props.type
    ).then( (action) => {

      this.props.history.push(`/messages/channel/${action.payload._id}`)

    })

    this.setState({
      input: '',
      open: false,
    })
  }

  handleInput(field){
    return( e =>
      this.setState({ [field]: e.target.value  })
    )
  }


  onOpenModal(){
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

   // console.log("channels list",this.props.channels);


   // console.log(this.state.currentChannel);

   console.log(this.props.channels);

   return(
     <ul className="ul-channel-messages">

      {this.props.channels.map( (channel) => {

        let formatted_Channel = Object.values(channel)[0];

        let bool = (formatted_Channel === this.state.currentChannel)? true: false;




        return(
           <ChannelIndexItem
           key={formatted_Channel._id}
           channel={formatted_Channel}
           active={bool}
           onToggle={this.toggleActive}
           />
        )
      })}


     </ul>
  );
 }


  render(){
    // if(this.state.loading){
    //   return null;
    // }

    const { open } = this.state;
    return(
      <div>
        <div className="message-display-add">
          <span> ChannelDisplay </span>
          <button onClick={() => this.onOpenModal() }> + </button>
          <Modal
            open={open}
            onClose={() => this.onCloseModal()}
            little
            classNames={{
                  transitionEnter: 'transition-enter',
                  transitionEnterActive: 'transition-enter-active',
                  transitionExit: 'transition-exit-active',
                  transitionExitActive: 'transition-exit-active',

                }}
            animationDuration={1000} >

            <h2>Create a new Channel</h2>
            <button onClick={(e) => this.handleSubmit(e)}> Submit </button>
            <input
              placeholder="Enter channel name"
              value={this.state.input}
              onChange={this.handleInput('input')}
            />

          </Modal>

        </div>

        {this.renderChannels()}

      </div>
    )
  }
};

export default ChannelDisplay;
