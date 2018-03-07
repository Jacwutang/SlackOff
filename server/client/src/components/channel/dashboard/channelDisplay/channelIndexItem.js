import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import './channelDisplay.css';
import '../dashboard.css';


class ChannelIndexItem extends Component{
  constructor(){
    super();

    this.state = ({
      background: 'inactive'
    })
  }

  componentDidMount(){
    console.log(this.props);
  }


  toggleBackground(){
    let { background } = this.state;




  }
  render(){
    const { channel } = this.props;

    return(
      <Link to={`/messages/channel/${channel._id}`}>

      <li
      className="channel-index-item"
      tabindex="1"

      >

        {channel.name}

      </li>

      </Link>
    );
  }

};

export default ChannelIndexItem;
