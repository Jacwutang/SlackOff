import React, { Component } from 'react';

import Modal from 'react-responsive-modal';

import { RECEIVE_CHANNEL_ERRORS } from 'actions/types';
import axios from 'axios';

// import ChannelIndexItem from './ChannelIndexItem';
import ChannelSearchModal from './ChannelSearchModal';
import ChannelAddModal from './ChannelAddContainer';
import ChannelList from './ChannelListContainer';
// import {Wave} from 'better-react-spinkit';

import 'assets/css/ChannelDisplay/channelDisplay.css';
import 'assets/css/Dashboard/dashboard.css';
import 'assets/css/animation.css';
import 'assets/css/SessionForm/sessionForm.css';


class ChannelDisplay extends Component{
  constructor(props){
    super(props);
  }

  render(){


    return(
      <div>
         <div className="message-display-add">
           <span className="message-type-header"> Channels </span>
           <ChannelSearchModal socket={this.props.socket} />
           <ChannelAddModal/>
         </div>

        <ChannelList/>

      </div>
      );

    }

};

export default ChannelDisplay;
