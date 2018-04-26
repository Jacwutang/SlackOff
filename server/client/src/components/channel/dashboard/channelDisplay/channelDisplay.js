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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  async componentDidMount(){
    // this.props.history.push('/');
    //fetch channels
    // this.props.fetchChannels();
    //
    // if(this.props.auth_type){
    //   axios.get('/api/channels', {params:{type: this.props.auth_type}});
    // }
    console.log("channel display props", this.props);

    if(this.props.auth_type){
      this.props.fetchChannels();
    }

  }
  async componentWillReceiveProps(nextProps){
    //Google Oauth's props comes in later
    // if(this.props.auth_type !== nextProps.auth_type){
    //
    //   axios.get('/api/channels', {params:{type:nextProps.auth_type}});
    // }
    // console.log("component will recieve props");
    if(this.props.auth_type !== nextProps.auth_type){
      this.props.fetchChannels()
    }


    if(nextProps.channels.length !== this.props.channels.length){
      let newChannel = nextProps.channels.slice(-1)[0];

      return this.setState({
        currentChannel: newChannel
      });

    }

  }



  handleSubmit(e){
    e.preventDefault();
    this.props.createChannel({
      name: this.state.input
    }).then( (action) => {
      console.log(action.payload,"ACTION PAYLOAD");
      console.log(action.payload._id, "id");
      console.log(this.props, "PROPS");
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
     return;
   }

   let currentChannel = this.state.currentChannel;

   return(
     <ul className="ul-channel-messages">

      {this.props.channels.map( (channel) => {

        let bool = (channel === currentChannel)? true: false;

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


  render(){


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
