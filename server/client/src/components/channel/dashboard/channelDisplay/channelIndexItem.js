import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './channelDisplay.css';


class ChannelIndexItem extends Component{
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    const { channel } = this.props;

    return(
      <div>
        <Link to={`messages/channel/${channel._id}`}>
        {channel.name}
        </Link>
      </div>
    );
  }

};

export default ChannelIndexItem;
