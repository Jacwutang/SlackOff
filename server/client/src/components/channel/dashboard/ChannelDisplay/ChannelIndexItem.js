import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


import 'assets/css/Dashboard/dashboard.css';



class ChannelIndexItem extends Component{
  constructor(){
    super();

  }

  componentDidMount(){



  }


  handleClick = () => {
    //this is preserved/unchanged. Otherwise it would be from the event handler
    this.props.onToggle(this.props.channel);
  }

  render(){

    const { channel } = this.props;


    return(
      <Link to={`/messages/channel/${channel._id}`}>

      <li
      style={this.props.active === true ? styles.activeStyle : null }
      onClick={this.handleClick}>

        # {channel.name}

      </li>

      </Link>
    );
  }

};

let styles = {
  activeStyle:{
    backgroundColor: '#4F9589'
  },


}

export default ChannelIndexItem;
