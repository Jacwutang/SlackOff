import React, { Component } from 'react';

import Modal from 'react-responsive-modal';
import { RECEIVE_CHANNEL_ERRORS } from '../../../../actions/types';
import axios from 'axios';

import ChannelIndexItem from './ChannelIndexItem';
import ChannelSearch from './ChannelSearch';
import ChannelAdd from './ChannelAdd';
import {Wave} from 'better-react-spinkit';

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

     if(this.props.auth_type){

      this.props.fetchChannels().then( (action) => {

        if(action.payload.length !== 0){
          this.props.history.push(`/messages/channel/${action.payload[0]._id}`);
        }

        setTimeout( () => {
          this.setState({loaded:true})

        },3500);

      });


    }
  }


   componentWillReceiveProps(nextProps){
     console.log(nextProps,"nextProps");

    if(this.props.auth_type !== nextProps.auth_type){
      //Google Oauth's props comes in later

       this.props.fetchChannels().then(() => this.setState({loaded:true}))
    }

    //fetched channels came back

    if(nextProps.channels.length !== this.props.channels.length){

      // For active channel highlighting, 2 cases to test for. Initial fetch and subsequent adds
      let currentChannel = (this.props.channels.length === 0)?
      nextProps.channels[0]:
      nextProps.channels.slice(-1)[0];



      setTimeout( () => {
         this.setState({currentChannel: currentChannel,loaded: true})
       },5000);

      }



  }



  handleSubmit(e){
    e.preventDefault();

    this.props.createChannel(this.state.input, this.props.type).then( (action) => {


      if(action.type !== RECEIVE_CHANNEL_ERRORS){
        this.setState({input: '',open: false});
        this.props.history.push(`/messages/channel/${action.payload._id}`);

      }




    });


  }

  handleInput(field){
    return( e =>
      this.setState({ [field]: e.target.value  })
    )
  }

  toggleActive(channel){

   this.setState({
     currentChannel: channel
   });
   console.log("CHANNEL RETURNED IS", channel);
   this.props.history.push(`/messages/channel/${channel._id}`);

 }
 renderChannels(){

   // if(!this.state.currentChannel ){
   //   return null;
   // }
   if(!this.state.loaded){
     return (<div className="spinner-wrapper-channels">
              <Wave size={50} color="black" />
            </div>
          );
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


  onOpenModal(){
   this.setState({ open: true });
  };

 onCloseModal(){
   this.setState({ open: false });
  };

  render(){


    const { open } = this.state;
    return(
      <div>
        <div className="message-display-add">
          <span className="message-type-header"> Channels </span>
           <ChannelSearch/>

           <ChannelAdd
           errors={this.props.errors}
           clearErrors={this.props.clearErrors}
           createChannel={this.props.createChannel}
           type={this.props.type}
           toggleActive={this.toggleActive}
           />

        </div>

       {this.renderChannels()}



    </div>

  );
  }




};

export default ChannelDisplay;
