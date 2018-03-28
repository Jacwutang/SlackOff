import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Radium from 'radium';
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



  }



  componentWillReceiveProps(nextProps){

  }

  handleClick = () => {
    this.props.onToggle(this.props.channel);
  }



  render(){

    const { channel } = this.props;

    return(
      <Link to={`/messages/channel/${channel._id}`}>

      <li
      style={this.props.active === true ? styles.aStyle : styles.bStyle }
      onClick={this.handleClick}>

        {channel.name}

      </li>

      </Link>
    );
  }

};

let styles = {
  aStyle:{
    backgroundColor: 'blue'
  },


}

export default Radium(ChannelIndexItem);
