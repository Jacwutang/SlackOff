import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import Modal from 'react-responsive-modal';


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

  componentDidMount(){
    //fetch channels
    // this.props.fetchChannels();
    
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.channels.length === this.props.channels.length){
      return;
    }


    // Create a new channel and then extract it from the redux store;
    // set it as the currentChannel
    let newChannel = nextProps.channels.slice(-1)[0];

    this.setState({
      currentChannel: newChannel
    });


  }



  handleSubmit(e){
    e.preventDefault();
    this.props.createChannel({
      name: this.state.input
    }).then( (response) => {

      this.props.history.push(`/messages/channel/${response.payload.data._id}`)

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
          <span> channelDisplay </span>
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
