import React, { Component } from 'react';
import {connect} from 'react-redux';

import './channelDisplay.css';


class ChannelIndexItem extends Component{
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    const { channel } = this.props;

    return(
      <div>
        {channel.name}

      </div>
    );
  }

};

export default ChannelIndexItem;
