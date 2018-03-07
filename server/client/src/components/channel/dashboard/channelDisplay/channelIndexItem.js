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

    console.log(this.props);

  }

  componentWillReceiveProps(nextProps){

  }



  render(){
    const { channel } = this.props;

    return(
      <Link to={`/messages/channel/${channel._id}`}>

      <li
      style={this.props.active === true ? styles.aStyle : styles.bStyle }

      tabIndex="1"

      >

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

  bStyle:{
    ':hover': {
    backgroundColor: 'gray'
    }
  }
}

export default Radium(ChannelIndexItem);


// onClick={() => this.props.onToggle(channel)}
