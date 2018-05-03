import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'assets/css/Channel/channelSearch.css';

class ChannelSearchListItem extends Component{
  constructor(props){
    super(props);
  }




  render(){


    const {channel, match} = this.props;

    // if(match === ""){
    //   return null;
    // }

    const regex = new RegExp(match, 'gi');


    const channelName = channel.name.replace(regex, ` <span class="highlight-name"> ${match}</span>`);

      return(
      <Link style={{textDecoration: 'none', color: 'black'}}to={`/messages/channel/${channel._id}`}>
        <li className="li-search-results" dangerouslySetInnerHTML={{__html:channelName}} />
      </Link>
    )
  }

};

export default ChannelSearchListItem;
