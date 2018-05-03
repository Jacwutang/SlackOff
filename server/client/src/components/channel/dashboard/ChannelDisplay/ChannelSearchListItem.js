import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import 'assets/css/Channel/channelSearch.css';


class ChannelSearchListItem extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount(){
    console.log(this.props, "LIST ITEM PROPS");
  }

  handleClick(){
    const {channel, socket} = this.props;
    

    if(Object.keys(this.props.channels).length === 0 || !this.props.channels[channel._id]){

      this.props.joinChannel(channel._id).then( (action) => {
        console.log("action payload ChannelSearchItem", action);
        socket.emit('joinChannel', action.payload);

        this.props.handleClick(channel._id);


      })


    } else{
      this.props.handleClick(channel._id);
    }
  }


  render(){


    const {channel, match} = this.props;



    const regex = new RegExp(match, 'gi');


    const channelName = channel.name.replace(regex, ` <span class="highlight-name"> ${match}</span>`);

      return(

        <li className="li-search-results" onClick={this.handleClick} dangerouslySetInnerHTML={{__html:channelName}} />

    )
  }

};

export default (ChannelSearchListItem);
