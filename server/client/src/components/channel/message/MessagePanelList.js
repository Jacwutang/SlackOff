import React, { Component } from 'react';
import {connect} from 'react-redux';


import 'assets/css/Message/message.css';
import 'assets/css/Message/messagePanelInfo.css';

import axios from 'axios';

class MessagePanelList extends Component{
  constructor(props){
    super(props);
    this.state = {
      picture: '',
    }

  }

  componentDidMount(){
    axios.get('/api/avatars').then(resp => {

      let picture = resp.data.results[0].picture.thumbnail;
      this.setState({ picture: picture});
      });
  }


  render(){
    const {user} = this.props;
    return(
      <li className="members-li">
        <i className="fas fa-circle"></i>
        <img className="search-thumbnail-img" src={this.state.picture}></img>
        <span className="channel-name-header"> {user.username} </span>

      </li>
    );

  }

}

export default MessagePanelList;
